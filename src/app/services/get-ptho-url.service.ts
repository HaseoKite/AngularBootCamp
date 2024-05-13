import { Injectable } from '@angular/core';
import { PhotosConstant } from '../../constants/photos-constants';

@Injectable({
  providedIn: 'root'
})
export class GetPthoUrlService {
  constructor() {}

  getPhotoUrl(photo: string) {
    if (photo.endsWith('.png'))
      return PhotosConstant.sampleProduct.replace('%s', photo);
    if (photo.endsWith('.jpeg'))
      return PhotosConstant.samplePhoto.replace('%s', photo);
    return PhotosConstant.randomPhoto.replace('%s', photo);
  }
}
