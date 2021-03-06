import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-add',
  templateUrl: './film-add.component.html',
  styleUrls: ['./film-add.component.scss'],
  providers: [FilmService]
})
export class FilmAddComponent implements OnInit {

  constructor(private film: FilmService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data) {
    this.film.postFilms(data)
      .subscribe(data => {
        this.router.navigate(['films'])

      });
  }

}
