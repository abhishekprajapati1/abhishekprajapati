import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { TokenModule } from './token/token.module';
import { BlogModule } from './blog/blog.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [AuthModule, PrismaModule, TokenModule, BlogModule, TagsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
