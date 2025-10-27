import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { HttpService } from '../http/http.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _currentUser = new BehaviorSubject<User | null>(null);
  currentUser$ = this._currentUser.asObservable();

  private userChecked = false;



  constructor(private http: HttpService) {
  }

  logInUser(user: User) {

    this._currentUser.next(user);

  }
  logUserByCredentials(email: string, password: string) {
    return this.http.signIn({ email, password });
  }

  logOutUser() {  
    this.http.logOut().subscribe(
      {
        next: (val) => {
          console.log(val)
          this._currentUser.next(null);
          this.refreshUser()
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

  async refreshUser(): Promise<void> {
    this.userChecked = false;
    this.http.refreshUser().subscribe(
      {
        next: (val) => {
          this._currentUser.next(val as User);
          this.userChecked = true;
        },
        error: (err) => {
          this._currentUser.next(null);
          console.log(err);
        }
      }
    )
  }

  isLogged(): boolean {
    return this.currentUser$ !== null && this.userChecked;
  }

}
