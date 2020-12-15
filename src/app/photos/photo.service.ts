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

  addPhoto(photo) {
    this.photos.push(photo);
  }
}
