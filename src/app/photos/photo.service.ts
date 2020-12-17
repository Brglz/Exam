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

  postPhotos(photo: Photo): Observable<any> {
    return this.http.post<any>(this.httpService.hostUrl() + 'photos', photo)
  }

  deletePhoto(index): Observable<any> {
    return this.http.delete<any>(this.httpService.hostUrl() + 'photos' + '/' + index)
  }

  getPhoto(): Observable<any> {
    return this.http.get<any>(this.httpService.hostUrl() + 'photo/B44B7D5C-7E2E-4CC9-9B46-4CE8C5E84FF0');
  }

  editPhoto(data): Observable<any> {
    return this.http.put(this.httpService.hostUrl() + 'photo/B44B7D5C-7E2E-4CC9-9B46-4CE8C5E84FF0', data)
  }
}
