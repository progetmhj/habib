import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiProvider} from "../../providers/api/api";
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit-my-cv',
  templateUrl: 'edit-my-cv.html',
})
export class EditMyCvPage {
  someForm: FormGroup;

  public arr_val = [];
  public text_val;
  id:any

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public formBuilder: FormBuilder, public api: ApiProvider,public toastCtrl: ToastController) {
    this.id=localStorage.getItem("id")
    console.log(this.id)
    this.someForm = formBuilder.group({
      'input1': ['', Validators.compose([Validators.required])],
      'input2': ['', Validators.compose([Validators.required])],
      'input3': ['', Validators.compose([Validators.required])],
      'input4': ['', Validators.compose([Validators.required])],
       'input5': ['', Validators.compose([Validators.required])],
       'input6': ['', Validators.compose([Validators.required])],
       'input7': ['', Validators.compose([Validators.required])],
      'input8': ['', Validators.compose([Validators.required])],
       'input9': ['', Validators.compose([Validators.required])],
      'input10': ['', Validators.compose([Validators.required])],
      'input11': ['', Validators.compose([Validators.required])],
      'input12': ['', Validators.compose([Validators.required])],
      'input13': ['', Validators.compose([Validators.required])],
      'input14': ['', Validators.compose([Validators.required])],

    });
  }

  savecondidate() {
    const data = {
      "first_name": (this.someForm.get("input1").value),
      "last_name": (this.someForm.get("input2").value ),
      "birth_date": (this.someForm.get("input3").value ),
      "country": (this.someForm.get("input4").value ),
      "nationality":(this.someForm.get("input5").value ),
      "gender":(this.someForm.get("input6").value ),
      "language":(this.someForm.get("input7").value ),
      "fields":(this.someForm.get("input8").value ),
      "level" :(this.someForm.get("input9").value ),
      "education":(this.someForm.get("input10").value ),
      "yofexp":(this.someForm.get("input11").value ),
     "experience":(this.someForm.get("input12").value ),
      "training":(this.someForm.get("input13").value ),
      "skills":(this.someForm.get("input14").value ),
    }
    this.api.savecondidate(this.id,data.education,data.first_name,data.last_name,data.birth_date,data.nationality,data.gender,data.country,data.yofexp,data.fields,data.level,
      data.language,data.experience,data.training,data.skills).then((result) => {
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

  // call search popover
  searchPopover(myEvent) {
    let popover = this.popoverCtrl.create('SearchPopoverPage');
    popover.present({
      ev: myEvent
    });
  }

//  Function for save cources
  save_value() {
    if (this.text_val != undefined) {
      if (this.text_val != '') {
        this.arr_val.push(this.text_val);
      }
    }
    console.log(this.arr_val);
    this.text_val = '';
  }

// Function for delete item from list
  removeItem(item) {
    let index = this.arr_val.indexOf(item);
    if (index > -1) {
      this.arr_val.splice(index, 1);
    }
  }

  // go to another page
  goTo(page) {
    this.navCtrl.push(page);
  }
  toest(){
    const toast = this.toastCtrl.create({
      message: 'Your cv was successfully add',
      duration: 3000
    });
    toast.present();
  }

}
