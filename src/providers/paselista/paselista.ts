import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the PaselistaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PaselistaProvider {
 constructor(public http: Http ) {
 }
 getUrl:string="http://localhost/Codeigniter/index.php/sisEscolar_WS/insertaLista";

 buscarid(fecha,asistio,nombre){
 let headers = new Headers ();
 headers.append('Content-Type', 'application/json');
 let body={
   fecha: fecha,
   asistio: asistio,
   nombre: nombre
 };
 return this.http.post( this.getUrl, JSON.stringify(body), {headers: headers} )
  .map ( res=>res.json())
  .subscribe(data=>{
    console.log(data);
  });
 }
}
