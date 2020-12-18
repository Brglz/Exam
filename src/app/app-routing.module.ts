import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotosComponent } from './photos/photos.component'
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FilmsComponent } from './films/films.component';
import { PhotoCreateComponent } from './photos/photo-create/photo-create.component';
import { PhotoEditComponent } from './photos/photo-edit/photo-edit.component';
import { FilmEditComponent } from './films/film-edit/film-edit.component';
import { FilmSingleEditComponent } from './films/film-single-edit/film-single-edit.component';
import { AboutEditComponent } from './about/about-edit/about-edit.component';
import { FilmAddComponent } from './films/film-add/film-add.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'login',
    component: AuthComponent
  },
  {
    path: 'photos',
    pathMatch: 'full',
    component: PhotosComponent,

  },
  {
    path: 'photos/edit',
    component: PhotoEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'photos/add',
    component: PhotoCreateComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'about',
    pathMatch: 'full',
    component: AboutComponent,

  },
  {
    path: 'about/edit',
    component: AboutEditComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'films',
    pathMatch: 'full',
    component: FilmsComponent
  },
  {
    path: 'films/add',
    component: FilmAddComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'films/edit',
    component: FilmEditComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'films/edit/:id',
    component: FilmSingleEditComponent,
    canActivate: [AuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
