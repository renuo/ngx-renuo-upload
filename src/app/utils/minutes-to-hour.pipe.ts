import { Pipe, PipeTransform } from '@angular/core';
/*
 * Converts minutes into hours
 * Usage:
 *   value | myMinutesToHour
 * Example:
 *   {{150 | myMinutesToHour}}
 *   formats to: 2.5
 */
@Pipe({name: 'myMinutesToHour'})
export class MinutesToHourPipe implements PipeTransform {
  transform(value: number): number {
    return Math.round(100 * Math.round(value) / 60) / 100;
  }
}
