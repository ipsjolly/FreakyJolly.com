import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { SocialSharing } from '@ionic-native/social-sharing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(
    public navCtrl: NavController, 
    
    private file: File, 
    private fileOpener: FileOpener, 
    private socialSharing: SocialSharing) {

  }

  //Save Image Function
  saveImg() {
    let imageName = "FreakyJolly.jpg";
    const ROOT_DIRECTORY = 'file:///sdcard//';
    const downloadFolderName = 'tempDownloadFolder';
    
    //Create a folder in memory location
    this.file.createDir(ROOT_DIRECTORY, downloadFolderName, true)
      .then((entries) => {

        //Copy our asset/img/FreakyJolly.jpg to folder we created
        this.file.copyFile(this.file.applicationDirectory + "www/assets/imgs/", imageName, ROOT_DIRECTORY + downloadFolderName + '//', imageName)
          .then((entries) => {

            //Open copied file in device's default viewer
            this.fileOpener.open(ROOT_DIRECTORY + downloadFolderName + "/" + imageName, 'image/jpeg')
              .then(() => console.log('File is opened'))
              .catch(e => alert('Error' + JSON.stringify(e)));
          })
          .catch((error) => {
            alert('error ' + JSON.stringify(error));
          });
      })
      .catch((error) => {
        alert('error' + JSON.stringify(error));
      });
  }

  shareImg() { 
    let imageName = "FreakyJolly.jpg";
    const ROOT_DIRECTORY = 'file:///sdcard//';
    const downloadFolderName = 'tempDownloadFolder';
    
    //Create a folder in memory location
    this.file.createDir(ROOT_DIRECTORY, downloadFolderName, true)
      .then((entries) => {

        //Copy our asset/img/FreakyJolly.jpg to folder we created
        this.file.copyFile(this.file.applicationDirectory + "www/assets/imgs/", imageName, ROOT_DIRECTORY + downloadFolderName + '//', imageName)
          .then((entries) => {

            //Common sharing event will open all available application to share
            this.socialSharing.share("Message","Subject", ROOT_DIRECTORY + downloadFolderName + "/" + imageName, imageName)
              .then((entries) => {
                console.log('success ' + JSON.stringify(entries));
              })
              .catch((error) => {
                alert('error ' + JSON.stringify(error));
              });
          })
          .catch((error) => {
            alert('error ' + JSON.stringify(error));
          });
      })
      .catch((error) => {
        alert('error ' + JSON.stringify(error));
      });
  }


}