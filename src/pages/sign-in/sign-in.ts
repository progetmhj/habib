import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiProvider} from "../../providers/api/api";
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  users:any;
  myForm:FormGroup;
  constructor(public modalCtrl: ModalController,public _myApp:MyApp,public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,public api:ApiProvider,public alertCtrl: AlertController) {
    this.myForm = formBuilder.group({
      'input1': ['', Validators.compose([Validators.required])],
      'input2': ['', Validators.compose([Validators.required])]
    });
  }
  getlogin(){
    if(this._myApp.ChangeUser=='work') {

      console.log(this.myForm.get("input1").value)
      console.log(this.myForm.get("input2").value)
      this.api.getlogin(this.myForm.get("input1").value, this.myForm.get("input2").value)
        .then(data => {
          console.log(JSON.stringify(data).length)
          if (JSON.stringify(data).length == 2) {

            const alert = this.alertCtrl.create({
              title: 'Try again!',
              subTitle: 'Your login attempt was not successful!',
              buttons: ['OK']
            });
            alert.present();
          } else {
            this.users = data;

            console.log(data)
            console.log(data[0]._id);
            localStorage.setItem("id", data[0]._id)
            this.navCtrl.push('DiscoverWorkPage')

          }

        });
    }else {
      console.log(this.myForm.get("input1").value)
      console.log(this.myForm.get("input2").value)
      this.api.getlogin1(this.myForm.get("input1").value, this.myForm.get("input2").value)
        .then(data => {
          console.log(JSON.stringify(data).length)
          if (JSON.stringify(data).length == 2) {

            const alert = this.alertCtrl.create({
              title: 'Try again!',
              subTitle: 'Your login attempt was not successful!',
              buttons: ['OK']
            });
            alert.present();
          } else {
            this.users = data;

            console.log(data)
            console.log(data[0]._id);
            localStorage.setItem("id", data[0]._id)
            this.navCtrl.push('DiscoverHirePage')

          }

        });

    }
  }



  // go to another page
  goTo(page){
    if(page=='DiscoverWorkPage'){
      if(this._myApp.ChangeUser=='work'){
        this.navCtrl.push(page);
      }
      else{
        this.navCtrl.push('DiscoverHirePage');
      }
    }
    else{
      this.navCtrl.push(page);
    }
  }

  presentModal(modalPage) {
    let modal = this.modalCtrl.create(modalPage);
    modal.present();
  }



}
