import { Component } from '@angular/core';
import { I18n } from '../i18n/i18n';

@Component({
  selector: 'ru-single-upload',
  styleUrls: ['single-upload.component.scss'],
  templateUrl: 'single-upload.component.html'
})
export class SingleUploadComponent {
  i18n = I18n;
  file: File = null;
  buttonText: string = 'Upload a file';
  buttonStyle: string = 'hidden';

  upload(event: Event) {
    this.removeFile();
    this.getFile(<HTMLInputElement> event.srcElement);

    //this will be replace with the upload function
    this.updateProgressBar(100);
  }

  removeFile() {
    this.file = null;
    this.resetButton();
    this.updateProgressBar(0);
  }

  private updateProgressBar(num: number) {
    const progress = <HTMLProgressElement> document.getElementById('progress');
    progress.value = num;
    if (num > 99) {
      this.showRemoveButton();
    }
  }

  private getFile(fileInput: HTMLInputElement) {
    this.file = <File> fileInput.files[0];
    this.buttonText = this.file.name;
  }

  private showRemoveButton() {
    this.buttonStyle = '';
  }

  private resetButton() {
    this.buttonStyle = 'hidden';
    this.buttonText = 'Upload a file';
  }
}
