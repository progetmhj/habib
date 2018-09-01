import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController,ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-saved-cv',
  templateUrl: 'saved-cv.html',
})
export class SavedCvPage {

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
    this.noSavedCV();
  }


  items=[
      {img:'assets/img/005.png',
        name:'farah',
        facullty:'ESSTHS',
        Skills:['Html','css','Graphic Design'],
        experience:'5years',
      },
      {img:'assets/img/007.png',
        name:'habib',
        facullty:'IsetCom',
        Skills:['Html','css','Graphic Design'],
        experience:'2years',
      },
      {img:'assets/img/008.png',
        name:'sana',
        facullty:'ISSAt',
        Skills:['Html','css','Graphic Design'],
        experience:'2years',
      },

  ]

// Function for delete item from list
noItemsOfCV=false;
removeItem(item,$event){
  $event.stopPropagation();
  let index = this.items.indexOf(item);
  if(index > -1){
    this.items.splice(index, 1);
  }
  if(this.items.length == 0){
    this.noItemsOfCV=true;
  }
}
// no CV Function
noSavedCV(){
   if(this.items.length == 0){
    this.noItemsOfCV=true;
  }
}
// call popover Search
   searchPopover(myEvent) {
    let popover = this.popoverCtrl.create('SearchPopoverPage');
    popover.present({
      ev: myEvent
    });
  }
// call Modal Function
 callEmailModal() {
    let modal = this.modalCtrl.create('EmailFormPage');
    modal.present();
  }
  stopPropagation($event){
    $event.stopPropagation();
  }
  // go to another page
  goTo(page){
    this.navCtrl.push(page);
  }

}
