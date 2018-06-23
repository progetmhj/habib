import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditCompanyProfilePage } from './edit-company-profile';

@NgModule({
  declarations: [
    EditCompanyProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(EditCompanyProfilePage),
  ],
})
export class EditCompanyProfilePageModule {}
