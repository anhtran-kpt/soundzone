import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from '../prisma/prisma.service';
import { SignUpDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  private async hash(password: string) {
    return bcrypt.hash(password, Number(process.env.BCRYPT_SALT));
  }

  private signAccessToken(userId: string) {
    return this.jwt.sign(
      { sub: userId },
      { expiresIn: process.env.ACCESS_TOKEN_EXP },
    );
  }

  private signRefreshToken(userId: string) {
    return this.jwt.sign(
      { sub: userId },
      { expiresIn: process.env.REFRESH_TOKEN_EXP },
    );
  }

  private async persistRefreshToken(token: string, userId: string) {
    const payload = this.jwt.verify<{ exp: number }>(token);
    await this.prisma.refreshToken.create({
      data: { token, userId, expiresAt: new Date(payload.exp * 1_000) },
    });
  }

  private tokens(userId: string, accessToken: string, refreshToken: string) {
    return {
      userId,
      accessToken,
      refreshToken,
    };
  }

  async signUp(dto: SignUpDto) {
    const exists = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (exists) throw new UnauthorizedException('Email already used');

    const user = await this.prisma.user.create({
      data: { ...dto, password: await this.hash(dto.password) },
    });

    const accessToken = this.signAccessToken(user.id);
    const refreshToken = this.signRefreshToken(user.id);
    await this.persistRefreshToken(refreshToken, user.id);
    return this.tokens(user.id, accessToken, refreshToken);
  }

  async validateUser(email: string, pass: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');
    const ok = await bcrypt.compare(pass, user.password);
    if (!ok) throw new UnauthorizedException('Invalid credentials');
    return user;
  }

  async signIn(user: { id: string }) {
    const accessToken = this.signAccessToken(user.id);
    const refreshToken = this.signRefreshToken(user.id);
    await this.persistRefreshToken(refreshToken, user.id);
    return this.tokens(user.id, accessToken, refreshToken);
  }

  async refresh(refreshToken: string) {
    try {
      const payload = this.jwt.verify<{ sub: string }>(refreshToken);
      const inDb = await this.prisma.refreshToken.findUnique({
        where: { token: refreshToken },
      });
      if (!inDb) throw new Error();
      await this.prisma.refreshToken.delete({ where: { token: refreshToken } }); // rotate
      const accessToken = this.signAccessToken(payload.sub);
      const freshRefreshToken = this.signRefreshToken(payload.sub);
      await this.persistRefreshToken(freshRefreshToken, payload.sub);
      return this.tokens(payload.sub, accessToken, freshRefreshToken);
    } catch {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async signOut(userId: string) {
    await this.prisma.refreshToken.deleteMany({ where: { userId } });
    return { message: 'Logged out' };
  }
}
