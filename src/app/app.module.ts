import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutComponent } from './about/about.component';
import { FilmsComponent } from './films/films.component';
import { BlogComponent } from './blog/blog.component';
import { PhotoComponent } from './photos/photo/photo.component';
import { FilmComponent } from './films/film/film.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditComponent } from './photos/edit/edit.component';
import { CreateComponent } from './photos/create/create.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PhotosComponent,
    AboutComponent,
    FilmsComponent,
    BlogComponent,
    PhotoComponent,
    FilmComponent,
    FooterComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
