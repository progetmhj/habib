import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-applied-people',
  templateUrl: 'applied-people.html',
})
export class AppliedPeoplePage {
noItemsOfPeople=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController) {
    this.noPeopleApplied();
  }


  items=[
      {img:'assets/img/005.png',
        name:'Lela Edward',
        facullty:'commerce 2015',
        Skills:['Html','css','Graphic Design'],
        experience:'2years',
      },
      {img:'assets/img/007.png',
        name:'Lela Edward',
        facullty:'commerce 2015',
        Skills:['Html','css','Graphic Design'],
        experience:'2years',
      },
      {img:'assets/img/008.png',
        name:'Lela Edward',
        facullty:'commerce 2015',
        Skills:['Html','css','Graphic Design'],
        experience:'2years',
      },
      {img:'assets/img/009.png',
        name:'Lela Edward',
        facullty:'commerce 2015',
        Skills:['Html','css','Graphic Design'],
        experience:'2years',
      },
      {img:'assets/img/005.png',
        name:'Lela Edward',
        facullty:'commerce 2015',
        Skills:['Html','css','Graphic Design'],
        experience:'2years',
      },
      {img:'assets/img/007.png',
        name:'Lela Edward',
        facullty:'commerce 2015',
        Skills:['Html','css','Graphic Design'],
        experience:'2years',
      },
  ]

  // Function for delete item from list
removeItem(item,$event){
  $event.stopPropagation();
  let index = this.items.indexOf(item);
  if(index > -1){
    this.items.splice(index, 1);
      } 
      if(this.items.length == 0){
    this.noItemsOfPeople=true;
  }
}
// no CV Function
noPeopleApplied(){
   if(this.items.length == 0){
    this.noItemsOfPeople=true;
  }
}  


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
 
}
 