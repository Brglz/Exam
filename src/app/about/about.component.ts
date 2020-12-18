import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { About } from '../models/about.model';
import { AboutInterface } from './about-interface.service';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [AboutService]
})
export class AboutComponent implements OnInit {

  isLoggedIn = false;

  about: About;

  constructor(private aboutService: AboutService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe(data => this.about = data)
    this.isLoggedIn = this.authService._isLoggedIn;
  }

}
