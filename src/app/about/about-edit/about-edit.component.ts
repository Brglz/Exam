import { Component, OnInit } from '@angular/core';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.scss'],
  providers: [AboutService]
})
export class AboutEditComponent implements OnInit {

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
  }

  onSubmit(data) {
    return this.aboutService.editAbout(data).subscribe()
  }

}
