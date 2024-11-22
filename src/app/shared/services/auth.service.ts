import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuthenticated: boolean = false;
  public username: any;
  public roles: string[] = [];

  public users: any = {
    admin: { password: "1234", roles: ['ADMIN'] },
    user1: { password: "1234", roles: ['STUDENT'] },
  }

  constructor(

    private router: Router
  ) { }

  public login(username: string, password: string) {
    if (this.users[username] && this.users[username]['password'] == password) {
      this.username = username;
      this.roles = this.users[username]['roles'];
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

  public logout() {
    this.isAuthenticated = false;
    this.username = undefined;
    this.roles = [];
    this.router.navigateByUrl('/login');
  }
}
