import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PhotosComponent } from './photos/photos.component';
import { AboutComponent } from './about/about.component';
import { PhotoComponent } from './photos/photo/photo.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoCreateComponent } from './photos/photo-create/photo-create.component';
import { PhotoEditComponent } from './photos/photo-edit/photo-edit.component';
import { AboutEditComponent } from './about/about-edit/about-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { LoadingSpinerComponent } from './shared/loading-spiner/loading-spiner.component';
import { FilmsModule } from './films/films.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    AboutEditComponent,
    PhotosComponent,
    PhotoComponent,
    PhotoCreateComponent,
    PhotoEditComponent,
    FooterComponent,
    AuthComponent,
    LoadingSpinerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FilmsModule
  ],
  providers: [Title, HttpService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
