import { UserService } from '../../providers/servicio/servicio';
import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from "../home/home";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

/**
 * Generated class for the InicioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class inicioPage {
  users: any[] = [];

  constructor(
    public navCtrl: NavController,
    public userService: UserService
  ) {}

  ionViewDidLoad(){
    this.userService.getUsers()
    .subscribe(
      (data) => { // Success
        this.users = data['results'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }


}
