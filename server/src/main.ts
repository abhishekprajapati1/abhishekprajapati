import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';
import * as cookieParser from 'cookie-parser'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api");

  const allowedOrigins = [
    "http://localhost:3000",
  ];

  const allowedHeaders = [
    "*",
    "content-type",
    "authorization",
    "access-control-allow-origin",
  ];

  app.enableCors({
    origin: allowedOrigins,
    allowedHeaders,
    credentials: true,
  });

  app.use(json({ limit: "50mb" }));
  app.use(urlencoded({ limit: "50mb", extended: true }));
  app.use(cookieParser());


  await app.listen(4000);
}
bootstrap();
