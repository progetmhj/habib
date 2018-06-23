import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-details-work',
  templateUrl: 'details-work.html',
})
export class DetailsWorkPage {


  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  skills=[ 
    {skill:'English'},
    {skill:'French'},
    {skill:'Html'},
    {skill:'CSS'},
  ]
   searchPopover(myEvent) {
    let popover = this.popoverCtrl.create('SearchPopoverPage');
    popover.present({
      ev: myEvent
    });
  }
 

}
 