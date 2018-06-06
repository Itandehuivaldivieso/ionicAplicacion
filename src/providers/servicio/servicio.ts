import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) {}

  getUsers() {
    return this.http.get('https://randomuser.me/api/?results=25');
  }
}
