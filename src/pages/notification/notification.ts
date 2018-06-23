import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  noItemsOfNotification=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
    this.noNotification();
  }

   searchPopover(myEvent) {
    let popover = this.popoverCtrl.create('SearchPopoverPage');
    popover.present({
      ev: myEvent
    });
  }
  
items=[
  {img:'assets/img/006.png',title:'Company Name',date:'20 Aug',sub:'Send you an invitation'},
  {img:'',title:'15 Job match your skills',date:'20 Aug',sub:''},
]
// Remove Items 
  removeItem(item,$event){
  $event.stopPropagation();
  let index = this.items.indexOf(item);
  if(index > -1){
    this.items.splice(index, 1);
      }
     if(this.items.length == 0){
    this.noItemsOfNotification=true;
  }
}
// no CV Function
noNotification(){
   if(this.items.length == 0){
    this.noItemsOfNotification=true;
  }
} 
}
 