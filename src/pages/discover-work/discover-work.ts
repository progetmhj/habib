import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-discover-work',
  templateUrl: 'discover-work.html',
})
export class DiscoverWorkPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

   searchPopover(myEvent) {
    let popover = this.popoverCtrl.create('SearchPopoverPage');
    popover.present({
      ev: myEvent
    });
  }

 
  items=[
    {title:'Graphic Designer Require',days:'1d ago',valid:2,salary:3000},
    {title:'Graphic Designer Require',days:'3d ago',valid:0,salary:3000},
    {title:'Graphic Designer Require',days:'Just now',valid:3,salary:3000},
    {title:'Graphic Designer Require',days:'To day',valid:3,salary:3000},
    {title:'Graphic Designer Require',days:'2d ago',valid:2,salary:3000},
    {title:'Graphic Designer Require',days:'1d ago',valid:3,salary:3000},
  ]
    // go to another page 
  goTo(page){
    this.navCtrl.push(page);
  }
// tab Function
tab;
selectTab(value){
  this.tab=value;
}

}   
  