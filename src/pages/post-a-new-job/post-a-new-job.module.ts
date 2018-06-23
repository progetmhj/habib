import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PostANewJobPage } from './post-a-new-job';

@NgModule({
  declarations: [
    PostANewJobPage,
  ],
  imports: [
    IonicPageModule.forChild(PostANewJobPage),
  ],
})
export class PostANewJobPageModule {}
