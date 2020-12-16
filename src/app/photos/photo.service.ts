import { Photo } from "../models/photos.model";

export class PhotoService {

  private photos: Photo[] = [
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo'),
    new Photo('My photo', 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2013/11/pandasecurity-facebook-photo-privacy.jpg', 'This is my photo')
  ];

  getPhotos() {
    return this.photos;
  }

  addPhoto(photo): void {
    this.photos.push(photo);
  }

  removePhoto(index): void {
    this.photos.splice(index, 1);
  }
}
