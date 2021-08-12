import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  pushNotif(
    @Body() body:  {userid: string, event: string, message: string}
  ): Object {
    return this.appService.pushNotif(body)
  }
}
