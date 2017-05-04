import { ChangeDetectorRef, LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Angular2TokenService } from 'angular2-token/lib/angular2-token.service';
import { NgProgressModule } from 'ng2-progressbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './static-pages/home/home.component';

const APP_PROVIDERS: any = [
  //Sets the default locale
  {provide: LOCALE_ID, useValue: 'de-CH'},
  Angular2TokenService,
  ChangeDetectorRef,
  HttpModule
];

// tslint:disable-next-line:max-classes-per-file
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, AppRoutingModule,
    NgProgressModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  providers: [
    APP_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
