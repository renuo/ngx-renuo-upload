import { Component, Input, OnInit } from '@angular/core';
import { I18n } from '../i18n/i18n';
import { ImageService } from '../services/image/image.service';

@Component({
  selector: 'ru-img',
  styleUrls: ['image.component.scss'],
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
      this.setDisplayedImage(this.src);
    } else {
      console.error('Image needs a src.');
    }
  }

  private setDisplayedImage(url: string) {
    const filters: ImageFilters = {
      quality: this.quality,
      roundedCorners: this.roundedCorners,
      background: this.background,
      watermark: this.watermark
    };

    this.displayedImage = this.imageService.modifyImage(url, this.dimensions, filters);
  }
}
