import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaveJobsPage } from './save-jobs';

@NgModule({
  declarations: [
    SaveJobsPage,
  ],
  imports: [
    IonicPageModule.forChild(SaveJobsPage),
  ],
})
export class SaveJobsPageModule {}
