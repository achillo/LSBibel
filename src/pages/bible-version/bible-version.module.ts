import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BibleVersionPage } from './bible-version';

@NgModule({
  declarations: [
    BibleVersionPage,
  ],
  imports: [
    IonicPageModule.forChild(BibleVersionPage),
  ],
  exports:[BibleVersionPage]
})
export class BibleVersionPageModule {}
