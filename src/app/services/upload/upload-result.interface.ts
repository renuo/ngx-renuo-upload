export interface UploadResult {
  id: string;
  file: File;
  orginalName: string;
  cleanName: string;
  name: string;
  extension: string;
  sizeInMb: number;
  publicUrl?: string;
  filePath?: string;
  uploadProgressInPercent: number;
  uploadStatus: number;
  uploadStatusText: 'unsent' | 'waiting for signing' | 'waiting for upload'
    | 'opened' | 'loading' | 'canceled' | 'done';
}
