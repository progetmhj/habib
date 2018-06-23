import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cv-details',
  templateUrl: 'cv-details.html',
})
export class CvDetailsPage {

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
  }

  items=[
    {
      header:'Language',
      content:[
        {item:'English'},
        {item:'Franch'},
        {item:'Arabic'}
      ]
    },

    {
      header:'Skills',
      content:[
        {item:'It is a long established fact that a reader'},
        {item:'It is a long established fact that a reader'}
      ]
    },

    {
      header:'Courses',
      content:[
          { item:'Graphic Design Diploma'},
          { item:'Web Design Diploma'}
        ]
    },
  ]

// call Modal Function
 callEmailModal() {
    let modal = this.modalCtrl.create('EmailFormPage');
    modal.present();
  }

}
