import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola. Esta es mi primer aplicacion en Nest!';
  }
}
