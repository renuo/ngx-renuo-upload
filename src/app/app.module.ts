import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleUploadComponent } from './single-upload/single-upload.component';
import { RequestService } from './services/request/request.service';
import { SigningService } from './services/signing/signing.service';
import { UploadSerice } from './services/upload/upload.service';

const APP_PROVIDERS: any = [
  //Sets the default locale
  {provide: LOCALE_ID, useValue: 'de-CH'},
  HttpModule
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
    PageNotFoundComponent
  ],
  providers: [
    APP_PROVIDERS,
    UploadSerice,
    SigningService,
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
