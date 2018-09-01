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
  id:any
  email:any
  first_name:any
  last_name:any
  education:any[]=[]
  experience:any[]=[]
  training:any[]=[]
  skills:any[]=[]
  nationality:any
  gender:any
  birth_date:any
  phone:any
  country:any
  level:any
  yofexp:any
  fields:any






  constructor(private keyboard: Keyboard,public camera:Camera,public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,public api:ApiProvider) {
    this.id=localStorage.getItem("id")
    console.log(this.id)
    this.profile()
  }

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
  private fileReader: FileReader;
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

  profile(){
    this.api.profile(this.id)
      .then(data => {
        console.log(data)
        this.email=JSON.parse(JSON.stringify(data)).email
        this.country=JSON.parse(JSON.stringify(data)).country
        this.first_name=JSON.parse(JSON.stringify(data)).first_name
        this.last_name=JSON.parse(JSON.stringify(data)).last_name
        this.education=JSON.parse(JSON.stringify(data)).education
        this.nationality=JSON.parse(JSON.stringify(data)).nationality
        this.experience=JSON.parse(JSON.stringify(data)).experience
        this.training=JSON.parse(JSON.stringify(data)).training
        this.skills=JSON.parse(JSON.stringify(data)).skills
        this.gender=JSON.parse(JSON.stringify(data)).gender
        this.birth_date=JSON.parse(JSON.stringify(data)).birth_date
        this.phone=JSON.parse(JSON.stringify(data)).phone
        this.level=JSON.parse(JSON.stringify(data)).level
        this.yofexp=JSON.parse(JSON.stringify(data)).yofexp
        this.fields=JSON.parse(JSON.stringify(data)).fields

        console.log(this.email)
        console.log(this.country)
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
