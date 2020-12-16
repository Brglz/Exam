import { Component, OnInit } from '@angular/core';
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

  isLoggedIn = true;

  about: About;

  constructor(private aboutService: AboutService) {
  }

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe(data => this.about = data)
  }

}
