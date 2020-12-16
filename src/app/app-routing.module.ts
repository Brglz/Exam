import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FilmsComponent } from './films/films.component';
import { BlogComponent } from './blog/blog.component';
import { PhotoCreateComponent } from './photos/photo-create/photo-create.component';
import { PhotoEditComponent } from './photos/photo-edit/photo-edit.component';
import { FilmEditComponent } from './films/film-edit/film-edit.component';
import { FilmSingleEditComponent } from './films/film-single-edit/film-single-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'photos',
    pathMatch: 'full',
    component: PhotosComponent,
  },
  {
    path: 'photos/edit',
    component: PhotoEditComponent
  },
  {
    path: 'photos/add',
    component: PhotoCreateComponent
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
    path: 'films/edit',
    component: FilmEditComponent
  },
  {
    path: 'films/edit/:id',
    component: FilmSingleEditComponent
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
