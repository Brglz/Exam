import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
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

  isLoggedIn = false;

  constructor(private filmService: FilmService, private authServie: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authServie._isLoggedIn;
  }

  // removeFilm(index) {
  //   this.filmService.deleteFilm(index)
  //     .subscribe()
  // }

}
