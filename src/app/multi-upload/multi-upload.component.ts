import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ru-multi-upload',
  styleUrls: ['multi-upload.component.scss'],
  templateUrl: 'multi-upload.component.html'
})
export class MultiUploadComponent {
  @Input() acceptedFiles: string = 'image/*';
  @Input() maxFileSize: number; //MB
  @Output() onFileAdd = new EventEmitter<File[]>();
  @Output() onFileChange = new EventEmitter<File[]>();
  files?: File[];

  click(event: Event) {
    this.addFileFromInputElement(<HTMLInputElement> event.srcElement);
  }

  drop(event: Event) {
    event.preventDefault();
    this.addFileFromDragEvent(<DragEvent> event);
  }

  private addFileFromInputElement(uploadInput: HTMLInputElement) {
    const files = uploadInput.files;
    if (!files || files.length === 0) { return; }
    this.addFiles(this.convertToArray(files));
  }

  private addFileFromDragEvent(dragEvent: DragEvent) {
    this.addFiles(this.convertToArray(dragEvent.dataTransfer.files));
  }

  private addFiles(files: File[]) {
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

  private convertToArray(files: FileList): File[] {
    return Array.prototype.slice.call(files);
  }
}
