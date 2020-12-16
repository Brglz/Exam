import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-create',
  templateUrl: './photo-create.component.html',
  styleUrls: ['./photo-create.component.scss'],
  providers: [PhotoService]
})
export class PhotoCreateComponent implements OnInit {

  constructor(private photo: PhotoService) { }


  onSubmit(data) {
    this.photo.postPhotos(data)
      .subscribe(
        data => console.log('Success', data),
        error => console.error('Error', error)
      );
  }

  ngOnInit(): void {
  }

}
