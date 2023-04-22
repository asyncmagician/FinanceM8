import { Controller, Res, Get, HttpStatus, NotFoundException } from '@nestjs/common';
import { Response } from 'express';
import { ResponseHeader } from '../interfaces/responseHeader';

@Controller()
export class AppController {
    @Get('*')
    notFound(@Res() res: Response): void {
      const header = new ResponseHeader('error', '*', 'Route not found', HttpStatus.NOT_FOUND);
  
      throw new NotFoundException({ header, body: [] });
    }
}
