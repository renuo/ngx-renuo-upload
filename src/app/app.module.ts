import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomImageMultiUploadComponent } from './demo/custom-image-multi-upload/custom-image-multi-upload.component';
import { CustomImageComponent } from './demo/custom-image/custom-image.component';
import { CustomMultiUploadComponent } from './demo/custom-multi-upload/custom-multi-upload.component';
import { CustomSingleUploadComponent } from './demo/custom-single-upload/custom-single-upload.component';
import { DemoComponent } from './demo/demo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './image/image.component';
import { MultiUploadComponent } from './multi-upload/multi-upload.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FileBuilderService } from './services/file-builder/file-builder.servise';
import { ImageService } from './services/image/image.service';
import { RequestService } from './services/request/request.service';
import { SigningService } from './services/signing/signing.service';
import { UploadBuilderService } from './services/upload/upload-builder.service';
import { UploadService } from './services/upload/upload.service';
import { SingleUploadComponent } from './single-upload/single-upload.component';

const APP_PROVIDERS: any = [
  //Sets the default locale
  {provide: LOCALE_ID, useValue: 'de-CH'},
  HttpModule,
  UploadService,
  SigningService,
  RequestService,
  UploadBuilderService,
  ImageService,
  FileBuilderService
];

// tslint:disable-next-line:max-classes-per-file
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DemoComponent,
    SingleUploadComponent,
    PageNotFoundComponent,
    MultiUploadComponent,
    CustomSingleUploadComponent,
    ImageComponent,
    GalleryComponent,
    CustomImageComponent,
    CustomImageMultiUploadComponent,
    CustomMultiUploadComponent
  ],
  providers: [
    APP_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
