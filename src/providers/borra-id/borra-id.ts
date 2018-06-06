import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from "ionic-angular";
@Injectable()
export class BorraIdProvider {
 constructor(public http: Http, private alertCtrl: AlertController ) {
 }
 getUrl:string="http://localhost/Codeigniter/index.php/sisEscolar_WS/deleteuser";

 buscarid( id:string ){
 let data = new URLSearchParams();
 data.append("id", id );

 return this.http.post( this.getUrl, data )
 .map( res=>res.json());
 }
}
