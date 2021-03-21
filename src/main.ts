import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app';
import { ApolloErrorFilter } from './filters/apollo-error.filter';

/**
 * Bootstrap
 */
(async () => {
  const app = await NestFactory.create(AppModule);

  // Config Service
  const configService = app.get(ConfigService);

  // Global Filters
  app.useGlobalFilters(new ApolloErrorFilter());

  // NOTO:
  // We need to register the container for `class-validator` to be able to
  //  use services and providers in class validation.
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // Run!
  await app.listen(configService.get('app.port', 3000));
})();
