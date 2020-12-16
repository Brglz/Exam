import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-add',
  templateUrl: './film-add.component.html',
  styleUrls: ['./film-add.component.scss'],
  providers: [FilmService]
})
export class FilmAddComponent implements OnInit {

  constructor(private film: FilmService) { }

  ngOnInit(): void {
  }

  onSubmit(data) {
    console.log(data);

    this.film.postFilms(data)
      .subscribe(
        data => console.log('Success', data),
        error => console.error('Error', error)
      );
  }

}
