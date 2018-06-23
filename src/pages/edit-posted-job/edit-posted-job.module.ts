import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPostedJobPage } from './edit-posted-job';

@NgModule({
  declarations: [
    EditPostedJobPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPostedJobPage),
  ],
})
export class EditPostedJobPageModule {}
