import { ImageService } from './image-service';

const service = new ImageService();

describe('ImageService', () => {
  const imagePath = '/o/renuoupload/vrww/cfe3/b977/0eb1/84f4/c15f/83ba/247a/3f1d/apple-wallpaper-cool-hd.jpg';
  const host = 'renuo-upload-cdn-master.renuoapp.ch';
  const testImageUrl = `//${host}${imagePath}`;

  it('returns the resized image', () => {
    const resized = service.resizeProfileImage(testImageUrl);
    expect(resized).toEqual(`https://${host}/t/200x200/filters:round_corner(200,255,255,255)/u${imagePath}`);
  });

  it('returns a thumbor converted image', () => {
    const resized = service.thumborImage(testImageUrl, 'my-options');
    expect(resized).toEqual(`https://${host}/t/my-options/u${imagePath}`);
  });
});
