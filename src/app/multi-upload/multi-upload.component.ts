import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ru-multi-upload',
  styleUrls: ['multi-upload.component.scss'],
  templateUrl: 'multi-upload.component.html'
})
export class MultiUploadComponent {
  @Input() acceptedFiles: string = 'image/*';
  @Input() maxFileSize: number = 100; //MB
  @Output() onFileAdd = new EventEmitter<File[]>();
  @Output() onFileChange = new EventEmitter<File[]>();
  files?: File[];
  private megabyte: 1000000;

  click(event: Event) {
    this.addFileFromInputElement(<HTMLInputElement> event.srcElement);
  }

  drop(event: Event) {
    this.preventDefault(event);
    this.addFileFromDragEvent(<DragEvent> event);
  }

  preventDefault(event: Event) {
    event.preventDefault();
    event.stopPropagation();
  }

  private addFileFromInputElement(uploadInput: HTMLInputElement) {
    const files = uploadInput.files;
    if (!files) { return; }
    if (files.length === 0) { return; }
    this.addFiles(Array.prototype.slice.call(files));
  }

  private addFileFromDragEvent(dragEvent: DragEvent) {
    this.addFiles(Array.prototype.slice.call(dragEvent.dataTransfer.files));
  }

  private addFiles(files: File[]) {
    files = files.filter(file => file.size / this.megabyte < this.maxFileSize);
    if (this.files) {
      this.files = this.files.concat(files);
    } else {
      this.files = files;
    }
    this.emitFileAdded();
  }

  private emitFileAdded() {
    this.emitFileChanged();
    this.onFileAdd.emit(this.files);
  }

  private emitFileChanged() {
    this.onFileChange.emit(this.files);
  }

  private emitFileUploaded() {
    this.onFileUpload.emit(this.files);
  }
}
