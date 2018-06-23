import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';


@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {


  constructor(public _myApp:MyApp,public menuCtrl:MenuController,public navCtrl: NavController, public navParams: NavParams) {


  }



  // changeApp Function
selectApp;
  changeApp(value){
    this.selectApp=value;
    this._myApp.ChangeUser=value;
    if(value=='work'){
        this.menuCtrl.enable(true, 'workMenu');
        this.menuCtrl.enable(false, 'hireMenu');
    }
      else{
        this.menuCtrl.enable(false, 'workMenu');
        this.menuCtrl.enable(true, 'hireMenu');
      }
  }

  // go to another page
  goTo(page){
    console.log(this._myApp.ChangeUser);
    if(this._myApp.ChangeUser!=undefined){
      this.navCtrl.push(page);
    }
  }




}
