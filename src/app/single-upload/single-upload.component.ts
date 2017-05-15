import { Component, EventEmitter, Input, Output } from '@angular/core';
import { I18n } from '../i18n/i18n';

@Component({
  selector: 'ru-single-upload',
  styleUrls: ['single-upload.component.scss'],
  templateUrl: 'single-upload.component.html'
})
export class SingleUploadComponent {
  @Input() acceptedFiles: string = 'image/*';
  @Input() maxFileSize: number = 10; //MB
  @Output() onFileAdd = new EventEmitter<File>();
  @Output() onFileRemove = new EventEmitter<File>();
  @Output() onFileChange = new EventEmitter<File>();
  i18n = I18n;
  file: File = null;
  buttonText: string = 'Upload a file';
  buttonStyle: string = 'hidden';
  alertText: string;
  alertStyle: string = 'hidden';

  upload(event: Event) {
    const files = event.srcElement.files;
    if (files.length === 0) { return; }

    this.removeFile();
    this.addFile(files[0]);
    this.checkFileSize();

    //this will be replace with the upload function
    this.updateProgressBar(100);
  }

  removeFile() {
    this.file = null;
    this.emitFileRemoved();
    this.resetButton();
    this.updateProgressBar(0);
    this.removeAlert();
  }

  private updateProgressBar(num: number) {
    const progress = <HTMLProgressElement> document.getElementById('progress');
    progress.value = num;
    if (num > 99) {
      this.showRemoveButton();
    }
  }

  private addFile(file: File) {
    this.file = file;
    this.buttonText = this.file.name;
    this.emitFileAdded();
  }

  private checkFileSize() {
    if (this.file.size / 1000000 > this.maxFileSize) {
      this.addAlert('File is too big');
    }
  }

  private removeAlert() {
    this.alertStyle = 'hidden';
    this.alertText = '';
  }

  private addAlert(alertText: string) {
    this.alertStyle = '';
    this.alertText = alertText;
  }

  private showRemoveButton() {
    this.buttonStyle = '';
  }

  private resetButton() {
    this.buttonStyle = 'hidden';
    this.buttonText = 'Upload a file';
  }

  private emitFileAdded() {
    this.emitFileChanged();
    this.onFileAdd.emit(this.file);
  }

  private emitFileRemoved() {
    this.emitFileChanged();
    this.onFileRemove.emit(null);
  }

  private emitFileChanged() {
    this.onFileChange.emit(this.file);
  }
}
