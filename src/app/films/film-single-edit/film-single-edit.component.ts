import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Film } from 'src/app/models/film.model';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-single-edit',
  templateUrl: './film-single-edit.component.html',
  styleUrls: ['./film-single-edit.component.scss'],
  providers: [FilmService]
})
export class FilmSingleEditComponent implements OnInit {

  currentFilm;

  constructor(private route: ActivatedRoute, private film: FilmService) {
  }

  ngOnInit(): void {
    this.film.getFilm(this.route.snapshot.params.id).subscribe(data => {
      this.currentFilm = data;
    })
  }

  onSubmit(data) {
    this.film.editFilm(this.route.snapshot.params.id, data).subscribe()
  }

}
