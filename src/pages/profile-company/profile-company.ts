import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
@IonicPage()
@Component({
  selector: 'page-profile-company',
  templateUrl: 'profile-company.html',
})
export class ProfileCompanyPage {

noItemsOfJobs=false;
  constructor(public camera:Camera,public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
    this.noJobsPosted();

  }

choose='about';
  jobs=[
    {
      state:'Opened Jobs',
      info:[
        {title:'Graphic Designer Required',salary:3000,country:'USA',validTime:'2 days',peopleApplied:20},
        {title:'Graphic Designer Required',salary:3000,country:'USA',validTime:'2 days',peopleApplied:20},
      ]
    },
    {
      state:'Closed Jobs',
      info:[
        {title:'Graphic Designer Required',salary:3000,country:'USA',validTime:'2 days',peopleApplied:10},
      ]
    }
  ]



  searchPopover(popoverPage,myEvent) {
    let popover = this.popoverCtrl.create(popoverPage);
    popover.present({
      ev: myEvent
    });
  }

// change Image
base64Image='assets/img/g.png';
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

// go to another page
goTo(page){
  this.navCtrl.push(page);
}
stopPropagation($event){
  $event.stopPropagation();
}

// appear Small Menu Function
appear=false;
appearSmallMenu(item,value,$event){
  $event.stopPropagation();
  item.appear=value;
}

// Remove Items
removeItem(item,item2){
  let index = this.jobs.indexOf(item);
  let index2 = this.jobs[index].info.indexOf(item2);
  if(index2 > -1){
    this.jobs[index].info.splice(index2, 1);
    console.log(this.jobs[index].info.length)
  }
  if(this.jobs[index].info.length ==0){
    this.jobs.splice(index,1);
  }
  if (this.jobs.length ==0){
    this.noItemsOfJobs=true;
  }
}
noJobsPosted(){
  if (this.jobs.length ==0){
    this.noItemsOfJobs=true;
  }
}

}
