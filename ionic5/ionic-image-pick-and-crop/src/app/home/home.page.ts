import { Component } from '@angular/core';
import { Crop, CropOptions } from '@ionic-native/crop/ngx';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions: ImagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50,
  };

  cropOptions: CropOptions = {
    quality: 50
  }

  constructor(
    private crop: Crop,
    private imagePicker: ImagePicker,
    private file: File
  ) { }


  pickImage() {
    this.imagePicker.getPictures(this.imagePickerOptions).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.cropImage(results[i]);
      }
    }, (err) => {
      alert(err);
    });
  }

  cropImage(imgPath) {
    this.crop.crop(imgPath, this.cropOptions)
      .then(
        newPath => {
          this.showCroppedImage(newPath.split('?')[0])
        },
        error => {
          alert('Error cropping image' + error);
        }
      );
  }

  showCroppedImage(ImagePath) {
    this.isLoading = true;
    var copyPath = ImagePath;
    var splitPath = copyPath.split('/');
    var imageName = splitPath[splitPath.length - 1];
    var filePath = ImagePath.split(imageName)[0];

    this.file.readAsDataURL(filePath, imageName).then(base64 => {
      this.croppedImagepath = base64;
      this.isLoading = false;
    }, error => {
      alert('Error in showing image' + error);
      this.isLoading = false;
    });
  }

}
