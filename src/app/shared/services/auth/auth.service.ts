import { Injectable } from '@angular/core';
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User | undefined;
  constructor(){
  }

  logInUser(user: User){
    this.currentUser = user;
  }

  logOutUser(){
    this.currentUser = undefined;
  }

  isLogged(): boolean{
    return this.currentUser? true : false;
  }

}
