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
export class ListRemoteProvider {

  constructor(public http: Http) {
    //console.log('Hello ListRemoteProvider Provider');
  }
  getUrl:string="http://localhost/Codeigniter/index.php/sisEscolar_WS/getuser";

 getAlumnos(){
 return this.http.get(this.getUrl)
 .map(res=>res.json());
 }

}
