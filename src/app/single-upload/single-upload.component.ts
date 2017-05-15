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
  @Output() onFileRemove = new EventEmitter<boolean>();
  @Output() onFileChange = new EventEmitter<File>();
  file?: File;
  uploadFinished: boolean = false;
  progressInPercent: number = 0;
  alertText: string;

  constructor(private ref: ChangeDetectorRef, private singleUploadService: SingleUploadService) {}

  upload(event: Event) {
    this.removeFile();

    const uploadInput = <HTMLInputElement> event.srcElement;
    const files = uploadInput.files;

    this.addFile(files);

    if (this.file) {
      if (this.file.size / 1000000 > this.maxFileSize) {
        this.addAlert(I18n.t.upload.error.fileTooLarge);
      } else {
        this.singleUploadService.upload(this.file).subscribe(num => {
          this.progressInPercent = num;
          this.ref.detectChanges();

          if (num > 99) {
            this.uploadFinished = true;
            this.emitFileUploaded();
          }
        });
      }
    }
  }

  removeFile() {
    this.progressInPercent = 0;
    this.uploadFinished = false;
    this.file = undefined;
    this.emitFileRemoved();
    this.removeAlert();
  }

  private addFile(files: FileList | null) {
    if (!files) { return; }
    if (files.length === 0) { return; }
    this.file = files[0];
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
    this.onFileRemove.emit(true);
  }

  private emitFileChanged() {
    this.onFileChange.emit(this.file);
  }

  private emitFileUploaded() {
    this.onFileUpload.emit(this.file);
  }
}
