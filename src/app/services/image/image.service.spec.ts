import { ImageService } from './image.service';

const service = new ImageService();

describe('ImageService', () => {
  const imagePath = '/o/renuo-upload-demo-master/u1yv/7460/58ce/fa11/8453/0159/ce21/424e/f7ba/4473721-apple-wallpapers.jpg';
  const host = 'renuo-upload-cdn-master.renuoapp.ch';
  const testImageUrl = `//${host}${imagePath}`;

  it('returns the modified image, when there is no filter', () => {
    const modifiedImage = service.modifyImage(testImageUrl, '200x200', {});
    expect(modifiedImage).toEqual(`https://${host}/t/200x200/u${imagePath}`);
  });

  describe('when there are filters', () => {
    it('returns the modified image, with quality filter', () => {
      const modifiedImage = service.modifyImage(testImageUrl, '', {quality: 20});
      expect(modifiedImage).toEqual(`https://${host}/t/filters:quality(20)/u${imagePath}`);
    });

    it('returns the modified image, with rounded corners filter', () => {
      const modifiedImage = service.modifyImage(testImageUrl, '', {roundedCorners: 20});
      expect(modifiedImage).toEqual(`https://${host}/t/filters:round_corner(20,255,255,255)/u${imagePath}`);
    });

    it('returns the modified image, with rounded corners filter and background', () => {
      const modifiedImage = service.modifyImage(testImageUrl, '', {roundedCorners: 20, background: '15,15,15'});
      expect(modifiedImage).toEqual(`https://${host}/t/filters:round_corner(20,15,15,15)/u${imagePath}`);
    });

    it('returns the modified image, with watermark filter', () => {
      const modifiedImage = service.modifyImage(testImageUrl, '', {watermark: 'https://www.renuo.ch/images/logo.png'});
      expect(modifiedImage).toEqual(`https://${host}/t/filters:watermark(https://www.renuo.ch/images/logo.png,-10,-10,50)/u${imagePath}`);
    });
  });

  describe('when there are all filters and a dimenson', () => {
    it('returns the modified image, with watermark filter', () => {
      const filters = {quality: 20, roundedCorners: 50, background: '20,200,10', watermark: 'https://www.renuo.ch/images/logo.png'};
      const modifiedImage = service.modifyImage(testImageUrl, '400x500', filters);
      const expectedFilters = 'filters:quality(20):watermark(https://www.renuo.ch/images/logo.png,-10,-10,50):round_corner(50,20,200,10)';
      expect(modifiedImage).toEqual(`https://${host}/t/400x500/${expectedFilters}/u${imagePath}`);
    });
  });
});
