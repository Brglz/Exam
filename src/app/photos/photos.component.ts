import { Component, OnInit } from '@angular/core';
import { Photo } from '../models/photos.model';
import { PhotoService } from './photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
  providers: [PhotoService]
})
export class PhotosComponent implements OnInit {

  isLoggedIn = true;

  allPhotos: Photo[];

  constructor(private photos: PhotoService) {
  }

  ngOnInit(): void {
    this.photos.getPhotos()
      .subscribe(data => {
        this.allPhotos = data
        console.log(data[0].objectId);
      })

  }

}
