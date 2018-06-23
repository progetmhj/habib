import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscoverWorkPage } from './discover-work';

@NgModule({
  declarations: [
    DiscoverWorkPage,
  ],
  imports: [
    IonicPageModule.forChild(DiscoverWorkPage),
  ],
})
export class DiscoverWorkPageModule {}
