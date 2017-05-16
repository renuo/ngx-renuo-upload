import { ImageService } from '../services/image/image.service';
import { ImageComponent } from './image.component';

describe('ImageComponent', () => {
  let component: ImageComponent;

  beforeEach(() => {
    component = new ImageComponent(new ImageService());
    component.ngOnInit();
  });

  it('image is empty when no image is given', () => {
    expect(component.displayedImage).toEqual('');
  });

  it('adds the image', () => {
    component.updateImage('//test-host/o/test-image.jpg');
    expect(component.displayedImage).toEqual('//test-host/o/test-image.jpg');
  });
});
