import { Component,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { Keyboard } from '@ionic-native/keyboard';
import {ApiProvider} from "../../providers/api/api";
@IonicPage()
@Component({
  selector: 'page-profile-person',
  templateUrl: 'profile-person.html',
})
export class ProfilePersonPage {
  constructor(private keyboard: Keyboard,public camera:Camera,public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,public api:ApiProvider) {

  }
  items=[
    {
      header:'Language',
      content:[
        {item:'English'},
        {item:'Franch'},
        {item:'Arabic'}
      ]
    },

    {
      header:'Skills',
      content:[
        {item:'Html,Php,ionic,angular,java,node js'},
        {item:'photoshop,microsoft word'}
      ]
    },

    {
      header:'Courses',
      content:[
          { item:'Graphic Design Diploma'},
          { item:'Web Design Diploma'}
        ]
    },
  ]

  choose:string='cv';
   searchPopover(myEvent) {
    let popover = this.popoverCtrl.create('SearchPopoverPage');
    popover.present({
      ev: myEvent
    });
  }

  // go to another page
  goTo(page){
    this.navCtrl.push(page);
  }

// enable and Disable Function for input
  code:number=1;
  val=0;
  enable(value,type){
    this.val=value;
     setTimeout(() => {type.setFocus(); },150);
     this.keyboard.show();
  }
  disable(){
    this.val=0;
  }
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

}

// ngAfterViewInit(){
//    this.changeData;
//  }
//  changeData(input){
//    if(input==1){
//      this.isDisabled1 =!this.isDisabled1;
//      setTimeout(() => {
//        this.myLocation.setFocus();
//       }
//       ,150);

//       this.keyboard.show();
//     }






// }
// <ion-input type="email" placeholder="Lela@gmail.com"
// disabled="{{isDisabled1}}" (blur)="changeData(1)" #number></ion-input>
