import { v4 as uuidv4 } from 'uuid';

export class ResponseHeader {
    id: string;
    status: string;
    servertime: number;
    message: string;
    url: string;
    code: number;
  
    constructor(status: string, url: string, message: string, code: number) {
      this.id = uuidv4();
      this.status = status;
      this.servertime = Math.floor(Date.now() / 1000);
      this.url = url;
      this.message = message;
      this.code = code;
    }
  }
  