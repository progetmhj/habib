import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-post-a-new-job',
  templateUrl: 'post-a-new-job.html',
})
export class PostANewJobPage {

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
 