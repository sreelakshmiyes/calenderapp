import { Controller, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CalenderDto } from './entities/calender.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/date')
  getCalenderDate(@Body() calenderDto: CalenderDto) {
    try {

      const result = this.appService.getCalenderDate(calenderDto.operation.toLowerCase());
      console.log("result", result);
      return { "calculatedDate": result };
    }
    catch (err) {
      throw new Error(err.message);
    }

  }
}
