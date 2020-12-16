import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PhotoInterface } from "./photo-interface";

@Injectable()

export class PhotoService {


  private appId = '1CC5FA94-3C48-315E-FF9F-32A41CCF2500';
  private apiKey = '43E7AF4E-FFA2-4AF4-A668-D9328C93B81D';

  private _url: string = `https://api.backendless.com/${this.appId}/${this.apiKey}/data/`;

  constructor(private http: HttpClient) { }

  getPhotos(endPoint): Observable<PhotoInterface[]> {
    return this.http.get<PhotoInterface[]>(this._url + endPoint)
  }
}
