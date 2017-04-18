import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { Requeri } from './requeri';

@NgModule({
  declarations: [
    Requeri,
  ],
  imports: [
    IonicModule.forRoot(Requeri),
  ],
  exports: [
    Requeri
  ]
})
export class RequeriModule {}
