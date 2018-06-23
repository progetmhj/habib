import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppliedPeoplePage } from './applied-people';

@NgModule({
  declarations: [
    AppliedPeoplePage,
  ],
  imports: [
    IonicPageModule.forChild(AppliedPeoplePage),
  ],
})
export class AppliedPeoplePageModule {}
