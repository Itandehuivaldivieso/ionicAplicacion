import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from "ionic-angular";
@Injectable()
export class BuscaIdProvider {
 id_consulta:number;
 constructor(public http: Http, private alertCtrl: AlertController ) {
 //console.log('Hello BuscaId Provider');
 }
 getUrl:string="http://localhost/Codeigniter/index.php/sisEscolar_WS/getuserbyid";

 buscarid( id:string ){
 let data = new URLSearchParams();
 data.append("id", id );

 return this.http.post( this.getUrl, data )
 .map( res=>res.json());
 }
}
