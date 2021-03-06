import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-posted-job',
  templateUrl: 'edit-posted-job.html',
})
export class EditPostedJobPage {

  categoryModal='webDesigner';
  local='usa';
  experienceModal='1';
  joblevelModal='entry';
  salaryModal='2000';
  jobTypeModal='fullTime';
  contractModal='permanent';
  textVal='It is a long established fact that a reader will be distracted by the readable.';
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }

   
skills=[
  {
    title:'Computer',
    items:[
      {name:'Html' ,modelVal:'html'},
      {name:'Css'  ,modelVal:'css'},
      {name:'Php'  ,modelVal:'php'},
      {name:'Html' ,modelVal:'html1'},
      {name:'Css'  ,modelVal:'css1'},
      {name:'Php'  ,modelVal:'php1'},
    ]
  },
  {
    title:'Language',
    items:[
      {name:'Franch' ,modelVal:'franch'},
      {name:'Italy'  ,modelVal:'italy'},
      {name:'English'  ,modelVal:'english'},
      {name:'Franch' ,modelVal:'franch1'},
      {name:'Italy'  ,modelVal:'italy1'},
      {name:'English'  ,modelVal:'english1'},
    ]
  },
]



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
