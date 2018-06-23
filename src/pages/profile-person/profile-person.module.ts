import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePersonPage } from './profile-person';


@NgModule({
  declarations: [
    ProfilePersonPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePersonPage),
  ],
})
export class ProfilePersonPageModule {

}
