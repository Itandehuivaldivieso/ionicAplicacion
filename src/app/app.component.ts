import { ListaPage } from './../pages/lista/lista';
import { HomePage } from './../pages/home/home';
import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { inicioPage } from '../pages/index.paginas';

//import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  homep = HomePage;
  lista1 = ListaPage;
  inicio = inicioPage;
  rootPage:any = HomePage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  abrirPagina( pagina: any){
    this.rootPage =pagina;
    this.menuCtrl.close();
  }
}

