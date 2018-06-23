import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditMyCvPage } from './edit-my-cv';

@NgModule({
  declarations: [
    EditMyCvPage,
  ],
  imports: [
    IonicPageModule.forChild(EditMyCvPage),
  ],
})
export class EditMyCvPageModule {}
