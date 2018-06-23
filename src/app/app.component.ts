import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'WelcomePage';

  workPages: Array<{title: string, component: any}>;
  hirePages: Array<{title: string, component: any}>;
  constructor(public camera:Camera,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.workPages = [
      { title: 'Home', component: 'DiscoverWorkPage' },
      { title: 'Profile', component: 'ProfilePersonPage' },
      { title: 'Edit my CV', component: 'EditMyCvPage' },
      { title: 'Saved Jobs', component: 'SaveJobsPage' },
      { title: 'Notifications', component: 'NotificationPage' },
      { title: 'Messages', component: 'MessagesPage' },
      { title: 'Setting', component: 'SettingPage' },
    ];
    this.hirePages=[
      { title: 'Home', component: 'DiscoverHirePage' },
      { title: 'Profile', component: 'ProfileCompanyPage' },
      { title: 'Post new job', component: 'PostANewJobPage' },
      { title: 'Saved CV', component: 'SavedCvPage' },
      { title: 'Notifications', component: 'NotificationPage' },
      { title: 'Messages', component: 'MessagesPage' },
      { title: 'Setting', component: 'SettingPage' },
    ]

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page);
  }
// function to select item of side menu
  shownGroup = null;
  toggleGroup(group) {
      this.shownGroup = group;
    };
  isGroupShown(group) {
      return this.shownGroup === group;
      };


// change user Function
public ChangeUser;
// change Image
base64Image='assets/img/007.png';
 accessGallery(){
   this.camera.getPicture({
     sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,'+imageData;
     }, (err) => {
      console.log(err);
    });
  }

  // change Image
base64Image2='assets/img/011.png';
 accessGallery2(){
   this.camera.getPicture({
     sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
     destinationType: this.camera.DestinationType.DATA_URL
    }).then((imageData) => {
      this.base64Image2 = 'data:image/jpeg;base64,'+imageData;
     }, (err) => {
      console.log(err);
    });
  }

public animateVarible:boolean=false;
}
