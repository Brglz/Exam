import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AboutService } from '../about.service';

@Component({
  selector: 'app-about-edit',
  templateUrl: './about-edit.component.html',
  styleUrls: ['./about-edit.component.scss'],
  providers: [AboutService]
})
export class AboutEditComponent implements OnInit {

  constructor(private aboutService: AboutService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(data) {
    return this.aboutService.editAbout(data).subscribe(data => {
      this.router.navigate(['about'])
    })
  }

}
