import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth/auth.service';
import { FilmService } from '../films/film.service';
import { PhotoService } from '../photos/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [PhotoService, FilmService]
})
export class HomeComponent implements OnInit {

  photo;
  film;

  isLoggedIn = false;
  constructor(private title: Title, private photoService: PhotoService, private filmService: FilmService, private authService: AuthService) {
    this.isLoggedIn = authService._isLoggedIn;
  }

  ngOnInit(): void {
    this.title.setTitle('Home')
    this.photoService.getPhoto().subscribe(data => this.photo = data)
    this.filmService.getHomeFilm().subscribe(data => this.film = data)
  }

}
