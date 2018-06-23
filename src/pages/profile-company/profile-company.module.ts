import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileCompanyPage } from './profile-company';

@NgModule({
  declarations: [
    ProfileCompanyPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileCompanyPage),
  ],
})
export class ProfileCompanyPageModule {}
