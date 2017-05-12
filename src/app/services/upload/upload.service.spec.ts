import { inject, TestBed } from '@angular/core/testing';
import { RequestService } from '../request/request.service';
import { RequestServiceMock } from '../request/request.service.mock';
import { UploadSerice } from './upload.service';

describe('UploadService', () => {
  let service: UploadSerice;
  let requestService: RequestServiceMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UploadSerice,
        RequestServiceMock.getProviders()
      ]
    });
  });

  beforeEach(inject([UploadSerice, RequestService], (_service: UploadSerice, _requestService: RequestServiceMock) => {
    service = _service;
    requestService = _requestService;
  }));

  describe('uploadToAmazon', () => {
    it('sends the correct data', (done => {
      const fakeResponse = '{"url":"https://renuo-upload/","data":{"key":"upload-demod","acl":"public-read","policy":"Fsh","x_amz_algorithm":"dfe","x_amz_credential":"AKIAJP5UELF524C2NQFA/20170512/eu-central-1/s3/aws4_request","x_amz_expires":2000,"x_amz_signature":"qwerty","x_amz_date":"20170512T135325Z","utf8":"✓"},"file_prefix":"pre/fix","file_url_path":"//renuo-upload.renuoapp.ch/o/upload-demo-testing"}';
      const spy = spyOn(requestService, 'makeRequest');
      spy.and.callThrough();
      service.uploadToAmazon(fakeResponse, new File([''], 'nice/file')).subscribe(status => {
        expect(status.response).toEqual('mock');
        expect(requestService.lastMethod).toBe('POST');
        expect(requestService.lastData.get('key')).toBe('upload-demod');
        expect(requestService.lastData.get('x-amz-algorithm')).toBe('dfe');
        expect(requestService.lastData.get('x-amz-signature')).toBe('qwerty');
        expect(requestService.lastData.get('file').name).toBe('nice/file');
        done();
      });
      expect(spy).toHaveBeenCalled();
    }));
  });
});
