import { Injectable } from "@angular/core";
import { HttpService } from "../http.service";
import { About } from "../models/about.model";
import { HttpClient } from '@angular/common/http';
import { AboutInterface } from './about-interface.service';

@Injectable()

export class AboutService {

  constructor(private http: HttpClient, private httpService: HttpService) { }


  getAbout() {
    return this.http.get<AboutInterface>(this.httpService.hostUrl() + 'about/D672E8E5-BBF2-408E-A932-1975900A8A5B');
  }

  editAbout(edited: About) {
    return this.http.put(this.httpService.hostUrl() + 'about/D672E8E5-BBF2-408E-A932-1975900A8A5B', edited)
  }

}
