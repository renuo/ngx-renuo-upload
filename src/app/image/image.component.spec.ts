import { ImageService } from '../services/image/image.service';
import { ImageComponent } from './image.component';

describe('ImageComponent', () => {
  let component: ImageComponent;

  beforeEach(() => {
    component = new ImageComponent(new ImageService());
  });

  it('builds the image', () => {
    const modifiedImage = component.modifyImage('//test-host/o/test-image.jpg');
    expect(modifiedImage).toEqual('//test-host/o/test-image.jpg');
  });

  it('builds the image with filters', () => {
    spyOn(component, 'getFilters').and.returnValue({
      quality: 10,
      roundedCorners: 25,
      background: '20,255,255',
      watermark: 'https://example.com/test-image.jpg'
    });

    const modifiedImage = component.modifyImage('//test-host/o/test-image.jpg');
    expect(modifiedImage).toEqual('https://test-host/t/filters:quality(10):' +
      'watermark(https://example.com/test-image.jpg,-10,-10,50):' +
      'round_corner(25,20,255,255)/u/o/test-image.jpg');
  });
});
