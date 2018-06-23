import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CvDetailsPage } from './cv-details';

@NgModule({
  declarations: [
    CvDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CvDetailsPage),
  ],
})
export class CvDetailsPageModule {}
