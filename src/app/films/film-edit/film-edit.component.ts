import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.scss'],
  providers: [FilmService]
})
export class FilmEditComponent implements OnInit {

  constructor(private filmService: FilmService) { }

  ngOnInit(): void {
  }

  onSubmit(data) {
    return this.filmService.editHomeFilm(data).subscribe();
  }

}
