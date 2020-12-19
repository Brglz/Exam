import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AboutEditComponent } from './about/about-edit/about-edit.component';
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
    loadChildren: () => import('./films/films.module').then(m => m.FilmsModule)
  },
  {
    path: 'photos',
    loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
