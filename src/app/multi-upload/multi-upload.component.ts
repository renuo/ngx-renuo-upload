import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { ErrorMessage } from '../services/error-message.interface';
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
  @Input() acceptedFiles: string;
  @Input() maxFilesAllowed: number;

  @Output() onFilesAdd = new EventEmitter<UploadResult[]>();
  @Output() onFilesChange = new EventEmitter<UploadResult[]>();
  @Output() onFileUpload = new EventEmitter<UploadResult>();
  @Output() onFileRemove = new EventEmitter<UploadResult>();

  @Output() onError = new EventEmitter<ErrorMessage>();
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

    this.resultFiles = this.resultFiles.filter(file => {
      const isFileToRemove = file.id === id;

      file.uploadStatus = 'canceled';
      if (isFileToRemove) {
        this.emitFileRemoved(file);
      }
      return !isFileToRemove;
    });

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

      if (this.maxFilesReached(file)) {break; }
      if (this.dontMatchExtension(file)) {continue; }

      const resultFile = this.fileBuilderService.buildResult(file);

      this.uploadService.upload(resultFile).subscribe(result => {
        this.ref.detectChanges();

        if (result.uploadStatus === IS_UPLOADED) {
          this.emitFileUploaded(result);
        }
      });

      this.resultFiles.push(resultFile);
    }
    this.emitFilesAdded();
  }

  private maxFilesReached(file: File): boolean {
    if (this.maxFilesAllowed) {
      const maxFileReached = this.resultFiles.length > this.maxFilesAllowed;
      if (maxFileReached) {
        this.emitError({maxFilesReached: file});
      }
      return maxFileReached;
    }
    return false;
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

  private emitFilesAdded() {
    this.emitFilesChanged();
    this.onFilesAdd.emit(this.resultFiles);
  }

  private emitFilesChanged() {
    this.onFilesChange.emit(this.resultFiles);
  }

  private emitFileUploaded(result: UploadResult) {
    this.onFileUpload.emit(result);
  }

  private emitFileRemoved(result: UploadResult) {
    this.emitFilesChanged();
    this.onFileRemove.emit(result);
  }

  private emitError(error: ErrorMessage) {
    this.onError.emit(error);
  }
}
