import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-search-work',
  templateUrl: 'search-work.html',
})
export class SearchWorkPage {
date;
  categoryModal;
   constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  } 




   
checkboxList=[
      {title:'Type of Contract',
        checkboxs:[
          {name:'Permanent',model:'permanent'},
          {name:'Contract / Temp',model:'contract'},
          {name:'Freelance',model:'freelance'},
          {name:'Other',model:'other'},
        ]
      },
      {title:'Job Type',
        checkboxs:[
          {name:'Full Time',model:'Full Time'},
          {name:'Part Time',model:'Part Time'},
          {name:'Internship',model:'Internship'},
          {name:'Other',model:'other'},
        ]
      },
    ]

 
  // to call popover of search
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

}
