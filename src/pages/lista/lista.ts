import { ListaProvider } from './../../providers/lista/lista';
import { PaselistaProvider } from './../../providers/paselista/paselista';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { ListRemoteProvider } from '../../providers/list-remote/list-remote';
import { Message, Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { BuscaIdProvider } from "../../providers/busca-id/busca-id";


/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
})
export class ListaPage {

  id:number = 0;
  numero:number=0;
  lista =[];
  guardar=[];
  Nombre:any;
  datosAlumno=[];
  nombre: string;
  carrera: number;
  semestre: number;
  fecha1:Date;
  today:any;
  asistencia:string;
  constructor(
              private listRemote:ListRemoteProvider,
              private listaEn:PaselistaProvider,
              private _us: BuscaIdProvider,
              public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private viewCtrl: ViewController,
              )
              {
    this.getLista();
    this.today = new Date().toISOString();
    //this.myForm = this.editarAlumno();
    //this.id = this..NavParams.get('id');
    /*this.nombre=this.navParams('nombre');
    this.fecha=this.navCtrl('fecha');
    this.asistencia=this.navCtrl('asistencia');*/
    this.navParams.get('userParams');

  }
  getLista(){
    this.listRemote.getAlumnos().subscribe((data)=>{
      this.lista=data;
    });
  }

  showSelectValue(e,id,nombre) {
    if(e == "asistio"){
      this.asistencia = "asistio";
    }
    if(e== "falta"){
      this.asistencia ="falta";
    }
    if(e== "justificado"){
      this.asistencia = "justificado";
    }
    if(e== "retardo"){
      this.asistencia ="retardo"
    }
    var nose={
      fecha:this.today,
      asistio:this.asistencia,
      nombre:nombre,
    };

    this.guardar.push(nose);


}

  enviar(){
    console.log(this.guardar);
    for(let nombre of this.guardar){
      this.otrafuncion(nombre.fecha,nombre.asistio,nombre.nombre);
    }
}

otrafuncion(dia,asistio,nombre){
  console.log("dia",dia,"asistio",asistio,"nombre",nombre);
  this.listaEn.buscarid(dia,asistio,nombre);
}

}
