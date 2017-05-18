import { Component, Input } from '@angular/core';
import { ImageService } from '../services/image/image.service';

@Component({
  selector: 'ru-gallery',
  styleUrls: ['gallery.component.scss'],
  templateUrl: 'gallery.component.html'
})
export class GalleryComponent {
  @Input() thumbnailDimensions: string = '250x250';
  @Input() spacing: number = 10;
  @Input() showPreview: boolean = true;
  @Input() quality: number;
  @Input() roundedCorners: number;
  @Input() background: string;
  @Input() watermark: string;
  @Input() images: string[];
  displayImage: string;

  constructor(private imageService: ImageService) {}

  modifyThumbnail(url: string): string {
    return this.imageService.modifyImage(url, this.thumbnailDimensions, this.getFilters());
  }

  getFilters(): ImageFilters {
    return {
      quality: this.quality,
      roundedCorners: this.roundedCorners,
      background: this.background,
      watermark: this.watermark
    };
  }

  setDisplayImage(image: string) {
    this.displayImage = image;
  }

  getWidth(numImages: number) {
    const width: number = Number(this.thumbnailDimensions.split('x')[0]);
    const spacing: number = this.spacing * 2;
    return (width + spacing) * numImages;
  }
}
