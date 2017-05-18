export interface ErrorMessage {
  messageType: 'maxFilesReached' | 'dontMatchExtension';
  file: File;
}
