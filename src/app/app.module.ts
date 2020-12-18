import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutComponent } from './about/about.component';
import { FilmsComponent } from './films/films.component';
import { PhotoComponent } from './photos/photo/photo.component';
import { FilmComponent } from './films/film/film.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoCreateComponent } from './photos/photo-create/photo-create.component';
import { PhotoEditComponent } from './photos/photo-edit/photo-edit.component';
import { FilmEditComponent } from './films/film-edit/film-edit.component';
import { FilmSingleEditComponent } from './films/film-single-edit/film-single-edit.component';
import { AboutEditComponent } from './about/about-edit/about-edit.component';
import { FilmAddComponent } from './films/film-add/film-add.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { LoadingSpinerComponent } from './shared/loading-spiner/loading-spiner.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PhotosComponent,
    AboutComponent,
    FilmsComponent,
    PhotoComponent,
    FilmComponent,
    FooterComponent,
    PhotoCreateComponent,
    PhotoEditComponent,
    FilmEditComponent,
    FilmSingleEditComponent,
    AboutEditComponent,
    FilmAddComponent,
    LoadingSpinerComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [Title, HttpService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
