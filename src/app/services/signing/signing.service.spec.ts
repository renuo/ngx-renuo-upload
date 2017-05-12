import { inject, TestBed } from '@angular/core/testing';
import { RequestService } from '../request/request.service';
import { RequestServiceMock } from '../request/request.service.mock';
import { SigningService } from './signing.service';

describe('SigningService', () => {
  let service: SigningService;
  let requestService: RequestServiceMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SigningService,
        RequestServiceMock.getProviders()
      ]
    });
  });

  beforeEach(inject([SigningService, RequestService], (_service: SigningService, _requestService: RequestServiceMock) => {
    service = _service;
    requestService = _requestService;
  }));

  describe('getUploadInfoAndSignature', () => {
    it('gets uploaded info', (done => {
      const spy = spyOn(requestService, 'makeRequest');
      spy.and.callThrough();
      service.getUploadInfoAndSignature().subscribe(status => {
        expect(status.response).toEqual('mock');
        expect(requestService.lastMethod).toBe('POST');
        expect(requestService.lastPath).toContain('?api_key=');
        done();
      });
      expect(spy).toHaveBeenCalled();
    }));
  });
});
