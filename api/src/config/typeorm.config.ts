import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import databaseConfig from './database.config';

export const typeOrmConfig: TypeOrmModuleOptions = {
  ...databaseConfig,
  autoLoadEntities: true,
};
