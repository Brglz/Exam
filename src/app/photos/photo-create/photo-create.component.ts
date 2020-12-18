import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photo-create',
  templateUrl: './photo-create.component.html',
  styleUrls: ['./photo-create.component.scss'],
  providers: [PhotoService]
})
export class PhotoCreateComponent implements OnInit {

  constructor(private photo: PhotoService, private router: Router) { }


  onSubmit(data) {
    this.photo.postPhotos(data)
      .subscribe(data => {
        this.router.navigate(['photos'])
      });
  }

  ngOnInit(): void {
  }

}
