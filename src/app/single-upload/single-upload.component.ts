import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ErrorMessage } from '../services/error-message.interface';
import { FileBuilderService } from '../services/file-builder/file-builder.service';
import { UploadResult } from '../services/upload/upload-result.interface';
import { UploadService } from '../services/upload/upload.service';
@Component({
  selector: 'ru-single-upload',
  templateUrl: 'single-upload.component.html'
})
export class SingleUploadComponent {
  @Input() acceptedFiles: string;
  @Output() onFileAdd = new EventEmitter<UploadResult>();
  @Output() onFileUpload = new EventEmitter<UploadResult>();
  @Output() onFileRemove = new EventEmitter<UploadResult>();
  @Output() onFileChange = new EventEmitter<UploadResult>();
  @Output() onError = new EventEmitter<ErrorMessage>();
  resultFile?: UploadResult;

  constructor(private ref: ChangeDetectorRef, private uploadService: UploadService,
              private fileBuilderService: FileBuilderService) {}

  upload(event: Event) {
    this.prepareUploadFile(<HTMLInputElement> event.srcElement);

    if (this.resultFile) {
      this.uploadService.upload(this.resultFile)
        .subscribe(result => {
          this.ref.detectChanges();

          if (result.uploadStatusText === 'done') {
            this.emitFileUploaded();
          }
        });
    }
  }

  removeFile() {
    if (this.resultFile) {
      this.resultFile.uploadStatusText = 'canceled';
      this.emitFileRemoved();
    }
    this.resultFile = undefined;
  }

  private prepareUploadFile(uploadInput: HTMLInputElement) {
    this.removeFile();

    const files = uploadInput.files;

    if (!files || files.length === 0) { return; }
    const file = files[0];
    if (this.dontMatchExtension(file)) { return; }
    this.resultFile = this.fileBuilderService.buildResult(file);
    this.emitFileAdded();
  }

  private dontMatchExtension(file: File): boolean {
    if (this.acceptedFiles) {
      const acceptedFilesArray = this.acceptedFiles.replace(/ /g, '').split(',');
      const fileMatchExtension = acceptedFilesArray.includes(file.type);
      if (!fileMatchExtension) {
        this.emitError({dontMatchExtension: file});
      }
      return !fileMatchExtension;
    }
    return false;
  }

  private emitFileAdded() {
    this.emitFileChanged();
    this.onFileAdd.emit(this.resultFile);
  }

  private emitFileRemoved() {
    this.emitFileChanged();
    this.onFileRemove.emit(this.resultFile);
  }

  private emitFileChanged() {
    this.onFileChange.emit(this.resultFile);
  }

  private emitFileUploaded() {
    this.onFileUpload.emit(this.resultFile);
  }

  private emitError(error: ErrorMessage) {
    this.onError.emit(error);
  }
}
