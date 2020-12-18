import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges {
  constructor(private authService: AuthService) {
  }
  title = 'Exam';
  isLoggedIn = false;

  ngOnChanges() {
    this.isLoggedIn = this.authService._isLoggedIn;
  }
}
