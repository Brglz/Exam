import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Photo } from 'src/app/models/photos.model';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  @Input() photo: Photo;
  @Input() index;

  isLoggedIn = false;

  constructor(private photoService: PhotoService, private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService._isLoggedIn;
  }

  removePhoto(index) {
    this.photoService.deletePhoto(index)
      .subscribe()
  }


}
