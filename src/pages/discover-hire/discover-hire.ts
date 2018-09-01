import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController,ModalController } from 'ionic-angular';
import {ApiProvider} from "../../providers/api/api";

@IonicPage()
@Component({
  selector: 'page-discover-hire',
  templateUrl: 'discover-hire.html',
})
export class DiscoverHirePage {
listcondi:any
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,public api:ApiProvider) {
  this.ttcondi()
  }
  ttcondi(){
    this.api.getcandidate().then
    (data=>{
      console.log(data)
      this.listcondi=data

    })

  }
  // call popover Search
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
// call Modal Function
  callEmailModal() {
    let modal = this.modalCtrl.create('EmailFormPage');
    modal.present();
  }
  stopPropagation($event){
    $event.stopPropagation();
  }
}
