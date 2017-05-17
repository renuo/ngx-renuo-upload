import { Component, Input } from '@angular/core';
import { ImageService } from '../services/image/image.service';

@Component({
  selector: 'ru-image',
  templateUrl: 'image.component.html'
})
export class ImageComponent {
  @Input() dimensions: string;
  @Input() quality: number;
  @Input() roundedCorners: number;
  @Input() background: string;
  @Input() watermark: string;
  @Input() src: string;

  constructor(private imageService: ImageService) {}

  buildImage(url: string): string {
    return this.imageService.modifyImage(url, this.dimensions, this.getFilters());
  }

  getFilters(): ImageFilters {
    return {
      quality: this.quality,
      roundedCorners: this.roundedCorners,
      background: this.background,
      watermark: this.watermark
    };
  }
}
