import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,PopoverController,ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-email-form',
  templateUrl: 'email-form.html',
})
export class EmailFormPage {

  constructor(public navCtrl: NavController,public viewCtrl: ViewController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }
// call popover Search
   searchPopover(myEvent) {
    let popover = this.popoverCtrl.create('SearchPopoverPage');
    popover.present({
      ev: myEvent 
    });
  }
//dismiss Modal
dismiss() {
   this.viewCtrl.dismiss();
 }
    // go to another page 
  goTo(page){
    this.navCtrl.push(page);
  }

}
