import { UserService } from './../providers/servicio/servicio';
import { ListaPage } from './../pages/lista/lista';
import { HomePage } from './../pages/home/home';
import { inicioPage } from './../pages/inicio/inicio';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
//import { HomePage } from '../pages/home/home';
import { ListRemoteProvider } from '../providers/list-remote/list-remote';
import { Http , HttpModule } from '@angular/http';
import { BorraIdProvider } from '../providers/borra-id/borra-id';
import { BuscaIdProvider } from '../providers/busca-id/busca-id';
import { modificarProvider } from '../providers/modificar/modificar';
import { ListaProvider } from '../providers/lista/lista';
import { PaselistaProvider } from '../providers/paselista/paselista';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    inicioPage,
    ListaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    inicioPage,
    ListaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ListRemoteProvider,
    BorraIdProvider,
    BuscaIdProvider,
    modificarProvider,
    ListaProvider,
    PaselistaProvider,
    UserService,
  ]
})
export class AppModule {}
