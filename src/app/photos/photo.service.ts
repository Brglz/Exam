import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpService } from "../http.service";
import { Photo } from "../models/photos.model";
import { PhotoInterface } from "./photo-interface";

@Injectable()

export class PhotoService {

  public photos;

  constructor(private http: HttpClient, private httpService: HttpService) { }

  getPhotos(): Observable<PhotoInterface[]> {
    return this.http.get<PhotoInterface[]>(this.httpService.hostUrl() + 'photos')
  }

  postPhotos(photo: Photo) {
    return this.http.post<any>(this.httpService.hostUrl() + 'photos', photo)
  }

  deletePhoto(index) {
    return this.http.delete<any>(this.httpService.hostUrl() + 'photos' + '/' + index)
  }

}
