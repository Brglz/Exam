import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoggedIn = true;
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Home')
  }

  play(target: HTMLVideoElement) {
    target.play();
  }

  pause(target: HTMLVideoElement) {
    target.pause();
    target.muted = true;
  }
}
