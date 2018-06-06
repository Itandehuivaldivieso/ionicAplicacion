//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ListRemoteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class modificarProvider {

  constructor(public http: Http) {
    //console.log('Hello ListRemoteProvider Provider');
  }
  getUrl:string="http://localhost/Codeigniter/index.php/sisEscolar_WS/updateuser";

 modificaAlumnos(id:string, nombre:string, carrera:string, semestre:string){
  let data = new URLSearchParams();
  data.append("id", id );
  data.append("nombre", nombre);
  data.append("carrera", carrera);
  data.append("semestre", semestre);

  return this.http.post( this.getUrl, data )
  .map( res=>res.json());
 }

}
