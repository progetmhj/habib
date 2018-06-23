import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,PopoverController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {
  noItemsOfMessages=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
    this.noMessages();
  }

  items=[
    {name:'Company Name',img:'assets/img/006.png',p:'Hello ,, Dear Adam you have an interview'}
  ]

   searchPopover(myEvent) {
    let popover = this.popoverCtrl.create('SearchPopoverPage');
    popover.present({
      ev: myEvent 
    });
  }

// Remove Items
removeItem(item,$event){
  $event.stopPropagation();
  let index = this.items.indexOf(item);
  if(index > -1){
    this.items.splice(index, 1);
      }
   if(this.items.length == 0){
    this.noItemsOfMessages=true;
  }
}
// no CV Function
noMessages(){
   if(this.items.length == 0){
    this.noItemsOfMessages=true;
  }
} 
   // go to another page 
  goTo(page){
    this.navCtrl.push(page);
  } 
}  
 

