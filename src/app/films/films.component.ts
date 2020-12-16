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

  allFilms;

  constructor(private films: FilmService) {
  }

  ngOnInit(): void {
    this.films.getFilms().subscribe(data => { this.allFilms = data })
  }

}
