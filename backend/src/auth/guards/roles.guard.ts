import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole } from '@prisma/client';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private refl: Reflector) {}
  canActivate(ctx: ExecutionContext) {
    const roles = this.refl.get<UserRole[]>('roles', ctx.getHandler());
    if (!roles) return true;
    const user = ctx.switchToHttp().getRequest().user;
    return roles.includes(user.role);
  }
}
