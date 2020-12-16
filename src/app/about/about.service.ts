import { About } from "../models/about.model";

export class AboutService {

  about: About = new About('Gabriela Pometkova', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum perferendis ipsa consequuntur accusantium debitis sunt aliquid asperiores atque officiis harum ipsam rerum rem labore odit dignissimos, quidem quia exercitationem! Similique voluptatem eos beatae natus maxime, rerum quas doloribus deserunt voluptate laborum ipsum exercitationem, molestiae adipisci itaque, reprehenderit optio sapiente esse inventore quaerat. Cupiditate est exercitationem beatae adipisci numquam corporis ut veniam delectus? Eius nesciunt nobis ipsam harum repellendus sit voluptate, ut nam ducimus quasi aspernatur totam.Eius nesciunt nobis ipsam harum repellendus sit voluptate, ut nam ducimus quasi aspernatur totam.', 'https://scontent-otp1-1.xx.fbcdn.net/v/t1.0-9/58692011_2696777643726580_8943515240612495360_o.jpg?_nc_cat=106&ccb=2&_nc_sid=730e14&_nc_ohc=yEYyLRGvqsQAX_BfLa_&_nc_ht=scontent-otp1-1.xx&oh=5fd9e3598c65db24850ec5c4fe52d07b&oe=5FFBBDC0');

  getAbout() {
    return this.about;
  }

  editAbout(edited: About) {
    this.about = edited;
  }

}
