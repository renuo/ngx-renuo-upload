import { Component, Input, OnInit } from '@angular/core';
import { I18n } from '../i18n/i18n';
import { ImageService } from '../services/image/image.service';

@Component({
  selector: 'ru-image',
  templateUrl: 'image.component.html'
})
export class ImageComponent implements OnInit {
  @Input() dimensions: string;
  @Input() quality: number;
  @Input() roundedCorners: number;
  @Input() background: string;
  @Input() watermark: string;
  @Input() src: string;
  displayedImage: string;
  i18n = I18n;

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    if (this.src) {
      this.displayedImage = this.updateImage(this.src);
    } else {
      console.error('Image needs a src.');
    }
  }

  updateImage(url: string) {
    const filters: ImageFilters = {
      quality: this.quality,
      roundedCorners: this.roundedCorners,
      background: this.background,
      watermark: this.watermark
    };

    return this.imageService.modifyImage(url, this.dimensions, filters);
  }
}
