import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const databaseConfig: TypeOrmModuleOptions = {
  type: process.env.dbType as 'mysql',
  host: process.env.dbHost,
  port: +process.env.dbPort,
  username: process.env.dbUsername,
  password: process.env.dbPassword,
  database: process.env.dbName,
  synchronize: true,
  entities: ['src/**/*.entity.ts'],
};

export default databaseConfig;
