import { Injectable } from '@angular/core';
@Injectable()
export class FileBuilder {
  private fileUrlPath: string;
  private filePrefix: string;

  constructor(fileUrlPath: string, filePrefix: string) {
    this.filePrefix = filePrefix;
    this.fileUrlPath = fileUrlPath;
  }

  public buildResult(file: File): UploadResult {
    const cleanFilename: string = this.cleanFilename(file.name);
    return {
      orginalName: file.name,
      cleanName: cleanFilename,
      name: this.getShortName(cleanFilename),
      extension: this.getExtension(file.name),
      size: file.size,
      publicUrl: this.getPublicUrl(cleanFilename),
      filePath: this.getFilePath(cleanFilename)
    };
  }

  private cleanFilename(originalName: string): string {
    return originalName.toLowerCase().replace(/[ _]/g, '-').replace(/[^\w-.]/g, '');
  }

  private getExtension(originalName: string): string {
    return originalName.split('.').pop();
  }

  private getShortName(cleanName: string): string {
    return cleanName.replace(/\.[^/.]+$/, '');
  }

  private getPublicUrl(cleanName: string): string {
    return `${this.fileUrlPath}${cleanName}`;
  }

  private getFilePath(cleanName: string): string {
    return `${this.filePrefix}${cleanName}`;
  }
}
