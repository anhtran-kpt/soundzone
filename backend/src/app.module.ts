import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { GenreModule } from './modules/genre/genre.module';

@Module({
  imports: [GenreModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
