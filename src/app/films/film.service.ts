import { Film } from "../models/film.model";

export class FilmService {

  private films: Film[] = [
    new Film('Titanic 1', 'I was taking pictures', 'This was a nice movie.This was a nice movie.This was a nice movie.This was a nice movie.', 'assets/video/aurora.mp4'),
    new Film('Titanic 2', 'I was taking pictures', 'This was a nice movie.This was a nice movie.This was a nice movie.This was a nice movie.', 'assets/video/aurora.mp4'),
    new Film('Titanic 3', 'I was taking pictures', 'This was a nice movie.This was a nice movie.This was a nice movie.This was a nice movie.', 'assets/video/aurora.mp4'),
    new Film('Titanic 4', 'I was taking pictures', 'This was a nice movie.This was a nice movie.This was a nice movie.This was a nice movie.', 'assets/video/aurora.mp4'),
    new Film('Titanic 5', 'I was taking pictures', 'This was a nice movie.This was a nice movie.This was a nice movie.This was a nice movie.', 'assets/video/aurora.mp4')
  ];

  getFilms() {
    return this.films;
  }
}
