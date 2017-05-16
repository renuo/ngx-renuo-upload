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
}
