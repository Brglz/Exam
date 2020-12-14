import { Component, OnInit } from '@angular/core';
import { About } from '../models/about.model';
import { AboutService } from './about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [AboutService]
})
export class AboutComponent implements OnInit {

  isLoggedIn = true;

  about: About;

  constructor(private aboutService: AboutService) {
    this.about = aboutService.getAbout();
  }

  ngOnInit(): void {
  }

}
