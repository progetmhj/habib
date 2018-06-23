import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-save-jobs',
  templateUrl: 'save-jobs.html',
})
export class SaveJobsPage {
  noItemsOfJobs=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
    this.noSavedJobs();
  }

   searchPopover(myEvent) {
    let popover = this.popoverCtrl.create('SearchPopoverPage');
    popover.present({
      ev: myEvent
    });
  } 

 
  items=[
    {title:'Graphic Designer Require',days:'1d ago',valid:2,salary:3000},
    {title:'Graphic Designer Require',days:'3d ago',valid:0,salary:3000},
    {title:'Graphic Designer Require',days:'Just now',valid:3,salary:3000},
    {title:'Graphic Designer Require',days:'To day',valid:3,salary:3000},
    {title:'Graphic Designer Require',days:'2d ago',valid:2,salary:3000},
    {title:'Graphic Designer Require',days:'1d ago',valid:3,salary:3000},
  ]
  // Function for delete item from list
removeItem(item,$event){
  $event.stopPropagation();
  let index = this.items.indexOf(item);
  if(index > -1){
    this.items.splice(index, 1);
      }
   if(this.items.length == 0){
    this.noItemsOfJobs=true;
  }
}
// no CV Function
noSavedJobs(){
   if(this.items.length == 0){
    this.noItemsOfJobs=true;
  }
} 

    // go to another page 
  goTo(page){
    this.navCtrl.push(page);
  }
}  
 