import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-search-hire',
  templateUrl: 'search-hire.html',
})
export class SearchHirePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
  }
 
  // to call popover of search
   searchPopover(myEvent) {
    let popover = this.popoverCtrl.create('SearchPopoverPage');
    popover.present({
      ev: myEvent
    });
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

   // go to another page 
  goTo(page){
    this.navCtrl.push(page); 
  }  
}
