import { Component, Input, OnInit } from '@angular/core';
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

  isLoggedIn = true;

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
  }

  removePhoto(index) {
    this.photoService.removePhoto(index);
  }

}
