import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController,ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-discover-hire',
  templateUrl: 'discover-hire.html',
})
export class DiscoverHirePage {

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

  items=[
      {img:'assets/img/007.png',
        name:'habib jrad',
        facullty:'commerce 2015',
        Skills:['Html','css','Graphic Design'],
        experience:'2..5years',
      },
      {img:'assets/img/008.png',
        name:'Farah zayeni',
        facullty:'commerce 2015',
        Skills:['Html','css','Graphic Design'],
        experience:'5..10years',
      },



  ]
  // call popover Search
   searchPopover(myEvent) {
    let popover = this.popoverCtrl.create('SearchPopoverPage');
    popover.present({
      ev: myEvent
    });
  }
    // go to another page
  goTo(page){
    this.navCtrl.push(page);
  }
// call Modal Function
  callEmailModal() {
    let modal = this.modalCtrl.create('EmailFormPage');
    modal.present();
  }
  stopPropagation($event){
    $event.stopPropagation();
  }
}
