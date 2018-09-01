import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ApiProvider} from "../../providers/api/api";
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {
  someForm: FormGroup;
  constructor(public _myApp:MyApp,public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder,public api:ApiProvider,public toastCtrl: ToastController) {
    this.someForm = formBuilder.group({
      'input1': ['', Validators.compose([Validators.required])],
      'input2': ['', Validators.compose([Validators.required])],
      'input3': ['', Validators.compose([Validators.required])],
      'input4': ['', Validators.compose([Validators.required])],
      'input5': ['', Validators.compose([Validators.required])],
    });
  }
  signup() {
    if(this._myApp.ChangeUser=='work'){
      const  data={
      "email":this.someForm.get("input4").value,
      "username":(this.someForm.get("input5").value ),
      "password":( this.someForm.get("input3").value),
      "phone":(this.someForm.get("input1").value)
      }
    this.api.signup(data).then((result) => {
      console.log(result);
      console.log(JSON.parse(JSON.stringify(result))._id);
      localStorage.setItem("id",result['_id'])

    }, (err) => {
      console.log(err);
    });
    }else {
      const  data1={
        "email":this.someForm.get("input4").value,
        "username":(this.someForm.get("input5").value ),
        "password":( this.someForm.get("input3").value),
        "phone":(this.someForm.get("input1").value)

      }
      this.api.saveclient(data1).then((result) => {
        console.log(result);
      }, (err) => {
        console.log(err);
      });

    }
  }
  saveclient() {
    const  data1={
      "email":this.someForm.get("input4").value,
      "username":(this.someForm.get("input5").value ),
      "password":( this.someForm.get("input3").value),
      "phone":(this.someForm.get("input1").value)

    }
    this.api.saveclient(data1).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
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
  toest(){
    const toast = this.toastCtrl.create({
      message: 'account successfully added',
      duration: 3000
    });
    toast.present();
  }

}
