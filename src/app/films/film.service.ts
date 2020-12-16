import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpService } from "../http.service";
import { Film } from "../models/film.model";

@Injectable()

export class FilmService {

  constructor(private http: HttpClient, private httpService: HttpService) { }

  getFilms() {
    return this.http.get(this.httpService.hostUrl() + 'films');
  }

  getFilm(id) {
    return this.http.get(this.httpService.hostUrl() + 'films/' + id)
  }

  postFilms(film: Film) {
    return this.http.post<any>(this.httpService.hostUrl() + 'films', film)
  }

  deleteFilm(index) {
    return this.http.delete<any>(this.httpService.hostUrl() + 'films/' + index)
  }

  editFilm(id, data) {
    return this.http.put<any>(this.httpService.hostUrl() + 'films/' + id, data)
  }

}
