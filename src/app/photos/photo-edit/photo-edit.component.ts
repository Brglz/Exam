import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.scss'],
  providers: [PhotoService]
})
export class PhotoEditComponent implements OnInit {

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
  }

  onSubmit(data) {
    return this.photoService.editPhoto(data).subscribe();
  }


}
