import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  resizeProfileImage(imageUrl: string) {
    return this.thumborImage(imageUrl, '200x200/filters:round_corner(200,255,255,255)');
  }

  // see https://github.com/thumbor/thumbor/wiki/Usage for options
  thumborImage(imageUrl: string, imageOptions: string) {
    const index = imageUrl.indexOf('/o/');
    const filePath = imageUrl.slice(index);
    const host = imageUrl.slice(0, index);
    return `https:${host}/t/${imageOptions}/u${filePath}`;
  }
}
