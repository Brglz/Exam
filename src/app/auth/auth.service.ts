import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface AuthResponseData {
  objectId: string;
  "user-token": string;
  "prop-name1": string;
}

@Injectable()
export class AuthService {

  public _isLoggedIn;

  private _url: string = 'https://api.backendless.com/1CC5FA94-3C48-315E-FF9F-32A41CCF2500/43E7AF4E-FFA2-4AF4-A668-D9328C93B81D/users/login'

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(this._url, { "login": email, "password": password })
  }

  checkToken(token) {
    return this.http.get('https://api.backendless.com/1CC5FA94-3C48-315E-FF9F-32A41CCF2500/43E7AF4E-FFA2-4AF4-A668-D9328C93B81D/users/isvalidusertoken/' + token)
  }
}
