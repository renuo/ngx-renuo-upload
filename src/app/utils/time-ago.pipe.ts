import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
import * as moment from 'moment';
import { I18n } from '../i18n/i18n';

/*
 * Converts a date into into a string of the difference to now()
 * Usage:
 *   value | myTimeAgo
 * Example:
 *   {{new Date(2017, 1, 1) | myTimeAgo}} // if called on 2017-01-02
 *   formats to: 'Vor einem Tag'
 */
@Pipe({name: 'myTimeAgo'})
export class TimeAgoPipe implements PipeTransform {
  transform(value: Date): string {
    moment.locale('de');
    const durationString: string = _.upperFirst(moment(value).fromNow());
    return I18n.interpolate(I18n.t.utils.createdSince, {durationString});
  }
}
