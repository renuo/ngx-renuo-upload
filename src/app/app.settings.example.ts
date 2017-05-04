// Warning: if we change something here, we also need to change it in the webpack.config.js. Otherwise, the deployment does not work.
export class AppSettings {
  static RENUO_UPLOAD_API_KEY: string = process.env.RENUO_UPLOAD_API_KEY || 'YOUR_API_KEY';
  static RENUO_UPLOAD_SIGNING_URL: string = process.env.RENUO_UPLOAD_SIGNING_URL ||
    'https://renuo-upload-signing-master.renuoapp.ch/generate_policy';

}
