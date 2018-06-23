import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {
 public action = false;
  constructor(public _myApp:MyApp,public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  this.action = this._myApp.animateVarible;
  }

   searchPopover(myEvent) {
    let popover = this.popoverCtrl.create('SearchPopoverPage');
    popover.present({
      ev: myEvent
    });
  }

// animate Function variable animateVarible in app.component
public checkbox;
animateApp(e:any){ 
  this._myApp.animateVarible = e.checked;
  this.action = this._myApp.animateVarible;

  }



}
