import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-edit',
  templateUrl: './film-edit.component.html',
  styleUrls: ['./film-edit.component.scss'],
  providers: [FilmService]
})
export class FilmEditComponent implements OnInit {

  constructor(private filmService: FilmService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data) {
    return this.filmService.editHomeFilm(data).subscribe(data => {
      this.router.navigate([''])
    });
  }

}
