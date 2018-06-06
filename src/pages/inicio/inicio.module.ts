import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { inicioPage } from './inicio';

@NgModule({
  declarations: [
    inicioPage,
  ],
  imports: [
    IonicPageModule.forChild(inicioPage),
  ],
  exports: [
    inicioPage
  ]
})
export class InicioPageModule {}
