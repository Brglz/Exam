import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film.model';
import { FilmService } from './film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss'],
  providers: [FilmService]
})
export class FilmsComponent implements OnInit {

  isLoggedIn = true;

  allFilms: Film[];

  constructor(private films: FilmService) {
    this.allFilms = films.getFilms().reverse();
  }

  ngOnInit(): void {
  }

}
