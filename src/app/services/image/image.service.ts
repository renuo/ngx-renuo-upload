import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {

  modifyImage(url: string, dimensions: string, filters: ImageFilters): string {
    const dimensionsUrl = dimensions ? dimensions + '/' : '';
    const filtersUrl = this.buildFilters(filters);

    if (dimensionsUrl || filtersUrl) {
      return this.thumborImage(url, dimensionsUrl + filtersUrl);
    } else {
      return url;
    }
  }

  private thumborImage(url: string, imageOptions: string): string {
    const index = url.indexOf('/o/');
    const host = url.slice(0, index);
    const filePath = url.slice(index);
    return `https:${host}/t/${imageOptions}u${filePath}`;
  }

  private buildFilters(filters: ImageFilters): string {
    const quality = filters.quality ? 'quality(' + filters.quality + ')' : '';
    const watermark = filters.watermark ? 'watermark(' + filters.watermark + ',-10,-10,50)' : '';

    const filter = [quality, watermark, this.getRoundedCorners(filters)].filter(e => e.trim()).join(':');
    return filter ? 'filters:' + filter + '/' : '';
  }

  private getRoundedCorners(filters: ImageFilters): string {
    const background = filters.background ? filters.background : '255,255,255';
    return filters.roundedCorners ? 'round_corner(' + filters.roundedCorners + ',' + background + ')' : '';
  }
}
