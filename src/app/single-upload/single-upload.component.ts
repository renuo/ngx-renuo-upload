import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { I18n } from '../i18n/i18n';
import { SingleUploadService } from '../services/single-upload/single-upload.service';

@Component({
  selector: 'ru-single-upload',
  templateUrl: 'single-upload.component.html'
})
export class SingleUploadComponent {
  @Input() acceptedFiles: string = 'image/*';
  @Input() maxFileSize: number; //MB
  @Output() onFileAdd = new EventEmitter<File>();
  @Output() onFileUpload = new EventEmitter<File>();
  @Output() onFileRemove = new EventEmitter<File>();
  @Output() onFileChange = new EventEmitter<File>();
  file?: File;
  uploadFinished: boolean = false;
  progressInPercent: number = 0;
  alertText: string = '';
  private megabyte: 1000000;

  constructor(private ref: ChangeDetectorRef, private singleUploadService: SingleUploadService) {}

  upload(event: Event) {
    this.prepareUploadFile(<HTMLInputElement> event.srcElement);

    if (this.file) {
      if (this.file.size / this.megabyte > this.maxFileSize) {
        this.addAlert(I18n.t.upload.error.fileTooLarge);
      } else {
        this.singleUploadService.upload(this.file).subscribe(progress => this.updateProgress(progress));
      }
    }
  }

  removeFile() {
    this.progressInPercent = 0;
    this.uploadFinished = false;
    this.emitFileRemoved();
    this.file = undefined;
    this.removeAlert();
  }

  private prepareUploadFile(uploadInput: HTMLInputElement) {
    this.removeFile();

    const files = uploadInput.files;

    if (!files) { return; }
    if (files.length === 0) { return; }
    this.addFile(files[0]);
  }

  private updateProgress(progress: number) {
    this.progressInPercent = progress;
    this.ref.detectChanges();

    if (progress > 99) {
      this.uploadFinished = true;
      this.emitFileUploaded();
    }
  }

  private addFile(file: File) {
    this.file = file;
    this.emitFileAdded();
  }

  private removeAlert() {
    this.alertText = '';
  }

  private addAlert(alertText: string) {
    this.alertText = alertText;
  }

  private emitFileAdded() {
    this.emitFileChanged();
    this.onFileAdd.emit(this.file);
  }

  private emitFileRemoved() {
    this.emitFileChanged();
    this.onFileRemove.emit(this.file);
  }

  private emitFileChanged() {
    this.onFileChange.emit(this.file);
  }

  private emitFileUploaded() {
    this.onFileUpload.emit(this.file);
  }
}
