import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

require('dotenv').config();


const databaseConfig: TypeOrmModuleOptions = {
  type: process.env.dbType as 'mysql',
  host: process.env.dbHost,
  port: +process.env.dbPort,
  username: process.env.dbUsername,
  password: process.env.dbPassword,
  database: process.env.dbName,
  synchronize: true,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
};

export default databaseConfig;
