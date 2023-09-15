import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getCalenderDate(operation: string): Date {
    const input = operation.split(" ");
    const numInput = input[1];
    const timeInput = input[2];
    const dateInput = input[4];
    let currentDate = new Date();
    const calenderAddFn = operation.includes('add');
    if (calenderAddFn) {

      if (timeInput === 'weeks') {

        const weeksNo = parseInt(numInput) * 7;

        if (dateInput === 'today') {

          currentDate.setDate(currentDate.getDate() + weeksNo);
          return currentDate;
        }
        else {
          currentDate = new Date(dateInput);
          currentDate.setDate(currentDate.getDate() + weeksNo);
          return currentDate;
        }
      }
      else if (timeInput === 'days') {

        if (dateInput === 'today') {

          currentDate.setDate(currentDate.getDate() + parseInt(numInput));
          return currentDate;
        }
        else {
          currentDate = new Date(dateInput);
          currentDate.setDate(currentDate.getDate() + parseInt(numInput));
          return currentDate;
        }
      }

    }
    else {
      const calenderSubFn = operation.includes('subtract');
      if (calenderSubFn) {
        if (timeInput === 'weeks') {

          const weeksNo = parseInt(numInput) * 7;
          if (dateInput === 'today') {
            currentDate = new Date();
            currentDate.setDate(currentDate.getDate() - weeksNo);
            return currentDate;
          }
          else {
            currentDate = new Date(dateInput);
            currentDate.setDate(currentDate.getDate() - weeksNo);
            return currentDate;
          }
        }
        else if (timeInput === 'days') {

          if (dateInput === 'today') {
            currentDate = new Date();
            currentDate.setDate(currentDate.getDate() - parseInt(numInput));
            return currentDate;
          }
          else {
            currentDate = new Date(dateInput);
            currentDate.setDate(currentDate.getDate() - parseInt(numInput));
            return currentDate;
          }
        }
      }
      else {
        throw new Error("Unable to find valid date operation!");
      }
    }
  }
}
