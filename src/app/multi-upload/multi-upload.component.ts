import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { FileBuilderService } from '../services/file-builder/file-builder.servise';
import { UploadResult } from '../services/upload/upload-result.interface';
import { UploadService } from '../services/upload/upload.service';
const IS_UPLOADED: number = 204;
@Component({
  selector: 'ru-multi-upload',
  styleUrls: ['multi-upload.component.scss'],
  templateUrl: 'multi-upload.component.html'
})
export class MultiUploadComponent {
  @Input() acceptedFiles: string = 'image/*';
  @Output() onFilesAdd = new EventEmitter<UploadResult[]>();
  @Output() onFilesChange = new EventEmitter<UploadResult[]>();
  @Output() onFileUpload = new EventEmitter<UploadResult>();
  resultFiles: UploadResult[] = [];

  constructor(private ref: ChangeDetectorRef, private uploadService: UploadService,
              private fileBuilderService: FileBuilderService) {}

  click(event: Event) {
    this.addFileFromInputElement(<HTMLInputElement> event.srcElement);
  }

  drop(event: Event) {
    event.preventDefault();
    this.addFileFromDragEvent(<DragEvent> event);
  }

  removeFileBy(id: string, event: Event) {
    event.preventDefault();
    this.resultFiles = this.resultFiles.filter(file => file.id !== id);
    this.ref.detectChanges();
  }

  private addFileFromInputElement(uploadInput: HTMLInputElement) {
    const files = uploadInput.files;
    if (!files || files.length === 0) { return; }
    this.addFiles(files);
  }

  private addFileFromDragEvent(dragEvent: DragEvent) {
    this.addFiles(dragEvent.dataTransfer.files);
  }

  private addFiles(files: FileList) {

    for (const file of Array.from(files)) {
      const resultFile = this.fileBuilderService.buildResult(file);
      this.uploadService.upload(resultFile).subscribe(result => {
        this.ref.detectChanges();

        if (result.uploadStatus === IS_UPLOADED) {
          this.emitFilesUploaded(result);
        }
      });
      this.resultFiles.push(resultFile);
    }
    this.emitFilesAdded();
  }

  private emitFilesAdded() {
    this.emitFilesChanged();
    this.onFilesAdd.emit(this.resultFiles);
  }

  private emitFilesChanged() {
    this.onFilesChange.emit(this.resultFiles);
  }

  private emitFilesUploaded(result: UploadResult) {
    this.onFileUpload.emit(result);
  }
}
