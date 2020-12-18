import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Film } from '../models/film.model';
import { FilmService } from './film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  providers: [FilmService]
})
export class FilmsComponent implements OnInit {

  isLoggedIn = false;

  allFilms;

  constructor(private films: FilmService, private authServie: AuthService) {
  }

  ngOnInit(): void {
    this.films.getFilms().subscribe(data => { this.allFilms = data })
    this.isLoggedIn = this.authServie._isLoggedIn;
  }

}
