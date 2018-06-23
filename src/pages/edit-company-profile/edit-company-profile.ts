import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-company-profile',
  templateUrl: 'edit-company-profile.html',
})
export class EditCompanyProfilePage {

  date;
  public arr_val = [];
  public text_val;
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
   
  }

  // call search popover
   searchPopover(myEvent) {
    let popover = this.popoverCtrl.create('SearchPopoverPage');
    popover.present({
      ev: myEvent
    }); 
   }

//  Function for save Service  
save_value()
{
  if(this.text_val!=''){
    this.arr_val.push(this.text_val);
  }
  console.log(this.arr_val);
  this.text_val='';
}

// Function for delete item from list
removeItem(item){
  let index = this.arr_val.indexOf(item);
  if(index > -1){
    this.arr_val.splice(index, 1);
      }
  }
  

  // go to another page 
  goTo(page){
    this.navCtrl.push(page);
  } 

}
  