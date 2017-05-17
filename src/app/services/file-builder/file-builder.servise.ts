import { Injectable } from '@angular/core';
import { UploadResult } from '../upload/upload-result.interface';

@Injectable()
export class FileBuilderService {

  getPublicUrl(file: UploadResult, fileUrlPath: string): string {
    return fileUrlPath + file.cleanName;
  }

  getFilePath(file: UploadResult, filePrefix: string): string {
    return filePrefix + file.cleanName;
  }

  buildResult(file: File): UploadResult {
    const cleanFilename: string = this.cleanFilename(file.name);
    return {
      id: this.generateID(),
      file,
      orginalName: file.name,
      cleanName: cleanFilename,
      name: this.getShortName(cleanFilename),
      extension: this.getExtension(file.name),
      sizeInMb: this.getSizeInMb(file.size),
      uploadProgressInPercent: 0,
      uploadStatus: 0
    };
  }

  private cleanFilename(originalName: string): string {
    return originalName.toLowerCase().replace(/[ _]/g, '-').replace(/[^\w-.]/g, '');
  }

  private getExtension(originalName: string): string {
    const extension = originalName.split('.').pop();
    return extension ? extension : '';
  }

  private getSizeInMb(sizeInB: number) {
    return sizeInB / 1000024;
  }

  private getShortName(cleanName: string): string {
    return cleanName.replace(/\.[^/.]+$/, '');
  }

  private generateID(): string {
    return window.crypto.getRandomValues(new Uint32Array(4)).toString().replace(/,/g, '-');
  }
}
