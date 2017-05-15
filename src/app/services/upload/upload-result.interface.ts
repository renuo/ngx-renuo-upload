export interface UploadResult {
  id: number;
  orginalName: string;
  cleanName: string;
  name: string;
  extension: string;
  size_in_mb: number;
  publicUrl: string;
  filePath: string;
}
