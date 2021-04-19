import { commonConfig, createApolloLogger } from '@app/common';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLGatewayModule } from '@nestjs/graphql';
import { appConfig } from './configs';

/**
 * Gateway API Module
 */
@Module({
  imports: [
    // Third-party Modules
    // Configuration
    ConfigModule.forRoot({
      load: [appConfig, commonConfig],
      isGlobal: true,
    }),
    // GraphQL
    GraphQLGatewayModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const isDevelopment =
          configService.get('common.env', 'development') === 'development';

        const serviceList = configService.get('app.serviceList');

        return {
          gateway: {
            serviceList: serviceList.map(({ name, port }) => ({
              name,
              url: `http://127.0.0.1:${port}`,
            })),
          },
          server: {
            playground: isDevelopment,
            path: '/',
            logger: createApolloLogger('ApolloGateway'),
            autoSchemaFile: true,
            tracing: isDevelopment,
            context: ({ req, res }) => ({ req, res }),
          },
        };
      },
    }),
  ],
})
export class GatewayApiModule {}
