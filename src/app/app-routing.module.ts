import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { GalleryDemoComponent } from './demo/gallery-demo/gallery-demo.component';
import { ImageDemoComponent } from './demo/image-demo/image-demo.component';
import { MultiUploadDemoComponent } from './demo/multi-upload-demo/multi-upload-demo.component';
import { SingleUploadDemoComponent } from './demo/single-upload-demo/single-upload-demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: DemoComponent},
  {path: 'single-upload', component: SingleUploadDemoComponent},
  {path: 'multi-upload', component: MultiUploadDemoComponent},
  {path: 'image', component: ImageDemoComponent},
  {path: 'gallery', component: GalleryDemoComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
