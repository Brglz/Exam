import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FilmsComponent } from './films/films.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'photos',
    pathMatch: 'full',
    component: PhotosComponent
  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent
  },
  {
    path: 'films',
    pathMatch: 'full',
    component: FilmsComponent
  },
  {
    path: 'blog',
    pathMatch: 'full',
    component: BlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
