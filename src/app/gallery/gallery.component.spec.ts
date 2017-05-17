import { ImageService } from '../services/image/image.service';
import { GalleryComponent } from './gallery.component';

describe('GalleryComponent', () => {
  let component: GalleryComponent;

  beforeEach(() => {
    component = new GalleryComponent(new ImageService());
  });

  it('modifies the image', () => {
    const modifiedThumbnail = component.modifyThumbnail('//test-host/o/test-image.jpg');
    expect(modifiedThumbnail).toEqual('https://test-host/t/250x250/u/o/test-image.jpg');
  });

  it('modifies the image with filters', () => {
    spyOn(component, 'getFilters').and.returnValue({
      quality: 10,
      roundedCorners: 25,
      background: '20,255,255',
      watermark: 'https://example.com/test-image.jpg'
    });

    const modifiedThumbnail = component.modifyThumbnail('//test-host/o/test-image.jpg');
    expect(modifiedThumbnail).toEqual('https://test-host/t/250x250/filters:quality(10):' +
      'watermark(https://example.com/test-image.jpg,-10,-10,50):' +
      'round_corner(25,20,255,255)/u/o/test-image.jpg');
  });

  it('calculate the width', () => {
    const width = component.getWidth(8);
    expect(width).toEqual(8 * 270); //dimension 250 + 2 * padding 10 = 270
  });
});
