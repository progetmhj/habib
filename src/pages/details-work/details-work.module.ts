import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsWorkPage } from './details-work';

@NgModule({
  declarations: [
    DetailsWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsWorkPage),
  ],
})
export class DetailsWorkPageModule {}
