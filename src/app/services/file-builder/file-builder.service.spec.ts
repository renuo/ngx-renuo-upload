import { FileBuilderService } from './file-builder.service';
const service = new FileBuilderService();

describe('FileBuilderService', () => {
  const file = new File(['FileContent12345'], 'nice/file5?.jpg');
  const result = service.buildResult(file);

  describe('buildResult', () => {
    it('contains a id with a slash', () => {
      expect(result.id).toContain('-');
    });

    it('contains the file', () => {
      expect(result.file).toEqual(file);
    });

    it('splits correctly the names and extension', () => {
      expect(result.orginalName).toEqual('nice/file5?.jpg');
      expect(result.cleanName).toEqual('nicefile5.jpg');
      expect(result.name).toEqual('nicefile5');
      expect(result.extension).toEqual('jpg');
    });

    it('contains the unsent status', () => {
      expect(result.uploadProgressInPercent).toEqual(0);
      expect(result.uploadStatus).toEqual(0);
      expect(result.uploadStatusText).toEqual('unsent');
    });

    it('do not have a publicUrl or filePath', () => {
      expect(result.publicUrl).toBeUndefined();
      expect(result.filePath).toBeUndefined();
    });
  });

  describe('getPublicUrl', () => {
    it('returns the S3 public Url', () => {
      expect(service.getPublicUrl(result, '//public/url/')).toEqual('//public/url/nice/file5?.jpg');
    });
  });

  describe('getFilePath', () => {
    it('returns the S3 file path', () => {
      expect(service.getFilePath(result, 'path/to/file/')).toEqual('path/to/file/nice/file5?.jpg');
    });
  });
});
