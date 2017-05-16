import { inject, TestBed } from '@angular/core/testing';
import { Http } from '@angular/http';
import { HttpMock } from './http.mock';
import { SigningService } from './signing.service';

describe('SigningService', () => {
  let service: SigningService;
  let http: HttpMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SigningService,
        HttpMock.getProviders()
      ]
    });
  });

  beforeEach(inject([SigningService, Http], (_service: SigningService, _http: HttpMock) => {
    service = _service;
    http = _http;
  }));

  describe('getUploadInfoAndSignature', () => {
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
