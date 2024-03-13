import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {GalleryComponent} from "./pages/gallery/gallery.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {BlogComponent} from "./pages/blog/blog.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'gallery', component: GalleryComponent},
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
