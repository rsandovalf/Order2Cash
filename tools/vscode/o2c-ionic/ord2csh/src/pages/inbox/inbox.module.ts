import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { InboxPage } from './inbox';

@NgModule({
  declarations: [
    InboxPage,
  ],
  imports: [
    IonicModule.forRoot(InboxPage)
  ],
  exports: [
    InboxPage
  ]
})
export class InboxModule {}
