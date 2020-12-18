import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from './auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoading: boolean = false;
  error: string = null;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form) {
    const email: string = form.value.email;
    const password: string = form.value.password;
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>

    authObs = this.authService.login(email, password);

    authObs.subscribe(
      data => {
        this.isLoading = false
        localStorage.setItem('token', data['user-token']);
        this.error = null;
        this.authService._isLoggedIn = true;
        console.log(data);
      },
      error => {
        this.isLoading = false;
        this.error = error.error.message;
        console.log(error.error.message);
      }
    );

    form.reset()

  }

}
