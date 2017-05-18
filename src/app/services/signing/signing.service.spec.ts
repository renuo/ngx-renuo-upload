import { SigningRequestMock } from './signing-request.mock';
import { SigningService } from './signing.service';

describe('SigningService', () => {
  describe('getUploadInfoAndSignature', () => {
    const http: any = new SigningRequestMock();
    const service = new SigningService(http);

    it('receives the signing', (done => {
      const spy = spyOn(http, 'post');
      spy.and.callThrough();
      service.getUploadInfoAndSignature().subscribe(status => {
        expect(status.url).toEqual('https://example.com/');
        expect(status.data.policy).toEqual('Fsh');
        expect(http.lastMethod).toBe('post');
        expect(http.lastPath).toContain('generate_policy?api_key');
        expect(http.lastData).toBe('');
        done();
      });
      expect(spy).toHaveBeenCalled();
    }));
  });
});
