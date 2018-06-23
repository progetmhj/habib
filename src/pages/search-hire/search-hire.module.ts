import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchHirePage } from './search-hire';

@NgModule({
  declarations: [
    SearchHirePage,
  ],
  imports: [
    IonicPageModule.forChild(SearchHirePage),
  ],
})
export class SearchHirePageModule {}
