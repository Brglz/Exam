import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Photo } from '../models/photos.model';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  providers: [PhotoService]
})
export class PhotosComponent implements OnInit {

  isLoggedIn = false;

  allPhotos: Photo[];

  constructor(private photos: PhotoService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.photos.getPhotos()
      .subscribe(data => {
        this.allPhotos = data
      })
    this.isLoggedIn = this.authService._isLoggedIn;
  }

}
