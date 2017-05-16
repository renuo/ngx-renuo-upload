import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FileBuilderService } from '../services/file-builder/file-builder.servise';
import { UploadResult } from '../services/upload/upload-result.interface';
import { UploadService } from '../services/upload/upload.service';
const IS_UPLOADED: number = 204;
@Component({
  selector: 'ru-single-upload',
  templateUrl: 'single-upload.component.html'
})
export class SingleUploadComponent {
  @Input() acceptedFiles: string = 'image/*';
  @Output() onFileAdd = new EventEmitter<UploadResult>();
  @Output() onFileUpload = new EventEmitter<UploadResult>();
  @Output() onFileRemove = new EventEmitter<UploadResult>();
  @Output() onFileChange = new EventEmitter<UploadResult>();
  resultFile?: UploadResult;
  alertText: string = '';

  constructor(private ref: ChangeDetectorRef, private uploadService: UploadService,
              private fileBuilderService: FileBuilderService) {}

  upload(event: Event) {
    this.prepareUploadFile(<HTMLInputElement> event.srcElement);

    if (this.resultFile) {
      this.uploadService.upload(this.resultFile)
        .subscribe(result => {
          this.ref.detectChanges();

          if (result.uploadStatus === IS_UPLOADED) {
            this.emitFileUploaded();
          }
        });
    }
  }

  removeFile() {
    this.emitFileRemoved();
    this.resultFile = undefined;
    this.removeAlert();
  }

  private prepareUploadFile(uploadInput: HTMLInputElement) {
    this.removeFile();

    const files = uploadInput.files;

    if (!files || files.length === 0) { return; }
    this.resultFile = this.fileBuilderService.buildResult(files[0]);
    this.emitFileAdded();
  }

  private removeAlert() {
    this.alertText = '';
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
}
