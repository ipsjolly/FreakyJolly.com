import { Component,ViewChild } from '@angular/core';
import { NavController,Slides, NavParams  } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { SocialSharing } from '@ionic-native/social-sharing';
import { JsonData } from '../../assets/jsondata';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  mySlideOptions = {
    pager:true
  };
  @ViewChild(Slides) slides: Slides;
  activeObjImage = this.jsonData.imagesAll[0]; 
  items;
  fileext = ".jpg"; 
  ROOT_DIRECTORY = 'file:///sdcard//';
  downloadFolderName = 'happySpoonDownloadedImg';
  imgobj = this.activeObjImage;
  public initItem;
  constructor(
    public navCtrl: NavController,
    public jsonData: JsonData, 
    public navParams: NavParams, 
    private file: File, 
    private fileOpener: FileOpener, 
    private socialSharing: SocialSharing) {
    this.initItem = navParams.get("initSlide");
  }
 
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if(currentIndex !== undefined)
    this.activeObjImage = this.jsonData.imagesAll[currentIndex];
  }

  openfile() {
    //
    this.file.createDir(this.ROOT_DIRECTORY, this.downloadFolderName, true)
      .then((entries) => {

        this.file.copyFile(this.file.applicationDirectory + "www/assets/img/", JSON.stringify(this.imgobj.inum)+this.fileext, this.ROOT_DIRECTORY + this.downloadFolderName + '//', JSON.stringify(this.imgobj.inum)+this.fileext)
          .then((entries) => {
            this.fileOpener.open(this.ROOT_DIRECTORY + this.downloadFolderName + "/" + JSON.stringify(this.imgobj.inum)+this.fileext, 'image/jpeg')
              .then(() => console.log('File is opened'))
              .catch(e => alert('Error openening file 8888 ----- ' + JSON.stringify(e)));
          })
          .catch((error) => {
            alert('error 6666 ----' + JSON.stringify(error));
          });
      })
      .catch((error) => {
        alert('error 777 ----' + JSON.stringify(error));
      });
  }

  shareImg() { 
    //let imgobj = this.activeObjImage;
    this.file.createDir(this.ROOT_DIRECTORY, this.downloadFolderName, true)
      .then((entries) => {
        this.file.copyFile(this.file.applicationDirectory + "www/assets/img/", JSON.stringify(this.imgobj.inum)+this.fileext, this.ROOT_DIRECTORY + this.downloadFolderName + '//', JSON.stringify(this.imgobj.inum)+this.fileext)
          .then((entries) => {
            this.socialSharing.share("Find More on HappySpoonApps", "Sharing via HappySpoon", this.ROOT_DIRECTORY + this.downloadFolderName + "/" + JSON.stringify(this.imgobj.inum)+this.fileext,"https://play.google.com/store/apps/developer?id=Happy+Spoon+Apps")
              .then((entries) => {
                console.log('success ----- ' + JSON.stringify(entries));
              })
              .catch((error) => {
                alert('error ----' + JSON.stringify(error));
              });
          })
          .catch((error) => {
            alert('error 6666 ----' + JSON.stringify(error));
          });
      })
      .catch((error) => {
        alert('error 777 ----' + JSON.stringify(error));
      });
  }



}
