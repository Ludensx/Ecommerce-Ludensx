import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loggerGlobal } from './middleware/middleware.middleware';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const swaggerConfig = new DocumentBuilder().setTitle('Ecommerce API Back-M4 Henry')
  .setDescription('Esta es la documentación del proyecto de Ecommerce para la especialidad de back-end.')
  .setVersion('1.0').addBearerAuth().build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('API', app, document);
  app.use(loggerGlobal);
  app.useGlobalPipes(new ValidationPipe );
  await app.listen(3000);
}
bootstrap();
