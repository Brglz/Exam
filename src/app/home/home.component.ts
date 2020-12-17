import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FilmService } from '../films/film.service';
import { Home } from '../models/home.model';
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

  isLoggedIn = true;
  constructor(private title: Title, private photoService: PhotoService, private filmService: FilmService) {
  }

  ngOnInit(): void {
    this.title.setTitle('Home')
    this.photoService.getPhoto().subscribe(data => this.photo = data)
    this.filmService.getHomeFilm().subscribe(data => this.film = data)
  }

}
