import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedCvPage } from './saved-cv';

@NgModule({
  declarations: [
    SavedCvPage,
  ],
  imports: [
    IonicPageModule.forChild(SavedCvPage),
  ],
})
export class SavedCvPageModule {}
