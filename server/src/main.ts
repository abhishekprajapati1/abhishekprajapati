import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json, urlencoded } from 'express';
import * as cookieParser from 'cookie-parser'
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api");

  const allowedOrigins = [
    "http://localhost:3000",
    "https://abhishekprajapati.vercel.app"
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



  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
    whitelist: true,
    forbidNonWhitelisted: true,
  }))


  await app.listen(4000, () => Logger.log("Server is running and listening on http://127.0.0.1:4000"));
}
bootstrap();
