//import { modificarProvider } from './../../providers/modificar/modificar';
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { ListRemoteProvider } from '../../providers/list-remote/list-remote';
import { BuscaIdProvider } from "../../providers/busca-id/busca-id";
import { BorraIdProvider } from "../../providers/borra-id/borra-id";
import { modificarProvider } from "../../providers/modificar/modificar";
import { Message, Placeholder } from '@angular/compiler/src/i18n/i18n_ast';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  id:number = 0;
  lista =[];
  Nombre:any;
  datosAlumno=[];
  nombre: string;
  carrera: number;
  semestre: number;
  //asistencia=[];
  constructor(
              private listRemote:ListRemoteProvider,
              public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private viewCtrl: ViewController,
              private _us: BuscaIdProvider,
              private borraId: BorraIdProvider,
              private modifica1: modificarProvider)
              {
    this.getLista();
    /*this.myForm = this.editarAlumno();
    this.id = this..NavParams.get('id');
    this.nombre=this.navParams('nombre');
    this.carrera=this.navCtrl('carrera');
    this.semestre=this.navCtrl('semestre');*/
  }

  getLista(){
    this.listRemote.getAlumnos().subscribe((data)=>{
      this.lista=data;
    });
  }

  modifica(id){
    this.id=id;

  }
 /* editarAlumno(id){
    this.id=id;
    this._us.buscarid(id).subscribe((data)=>{
      this.datosAlumno=data;
      this.navCtrl.push(EditPage, { id: id, nombre:this.datosAlumno.nombre, carrera:this.datosAlumno.carrera, semestre:this.datosAlumno.semestre })
    });
  }*/
  consultarbyid(id){

    this.id=id;
    this._us.buscarid( id ).subscribe((data)=>{
      this.datosAlumno=data;
      let alert = this.alertCtrl.create({
        title: 'datos!',
        message: 'Nombre: '+this.datosAlumno.Nombre+'<br>' +'Carrera: '+ this.datosAlumno.Descripcion +'<br>'+ 'Semestre: '+ this.datosAlumno.Semestre,
        buttons: ['Ok']
      });
      alert.present()

  });
  }
  borraid(id){
    this.id=id;
    this.borraId.buscarid( id ).subscribe((data)=>{
      this.datosAlumno=data;
      this.getLista();
  });
  }
  showConfirm(id) {
    let confirm = this.alertCtrl.create({
    title: 'Estas a punto de BORRAR al alumno?',
    message: 'Confirmas el borrado?',
    buttons: [
    {
    text: 'Confirmar',
    handler: () => {
    this.borraid(id);
    }
    },
    {
    text: 'Cancelar',
    handler: () => {
    }
    }
    ]
    });
    confirm.present();
    }
}
