import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiProvider} from "../../providers/api/api";


@IonicPage()
@Component({
  selector: 'page-sign-in',
  templateUrl: 'sign-in.html',
})
export class SignInPage {
  users:any;
  myForm:FormGroup;
  constructor(public modalCtrl: ModalController,public _myApp:MyApp,public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,public api:ApiProvider) {
    this.myForm = formBuilder.group({
      'input1': ['', Validators.compose([Validators.required])],
      'input2': ['', Validators.compose([Validators.required])]
    });
  }
  getlogin(){

     console.log(this.myForm.get("input1").value)
     console.log(this.myForm.get("input2").value)
    this.api.getlogin(this.myForm.get("input1").value,this.myForm.get("input2").value)
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
  }
  getlogin1(){
    this.api.getlogin1(this.myForm.get("input1").value,this.myForm.get("input2").value)
      .then(data => {
        this.users = data;
        console.log(this.users);
      });
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
