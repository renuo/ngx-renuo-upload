import { Pipe, PipeTransform } from '@angular/core';
/*
 * Converts a number in cents to the next bigger unit
 * Usage:
 *   value | myCentConvert
 * Example:
 *   {{1920 | myCentConvert}}
 *   formats to: 19.2
 */
@Pipe({name: 'myCentConvert'})
export class CentConvertPipe implements PipeTransform {
  transform(value: number): number {
    return Math.round(value) / 100;
  }
}
