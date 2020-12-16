import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film.model';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  @Input() film: Film;
  @Input() index: Film;

  isLoggedIn = true;

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }

  removeFilm(index) {
    this.filmService.deleteFilm(index)
      .subscribe()
  }

}
