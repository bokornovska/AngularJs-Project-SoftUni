import { Injectable } from '@angular/core';
import { User } from '../models/user';

const USER_KEY = '[user]'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor() {
    try {
      const lsUser = localStorage.getItem(USER_KEY) || '';
      this.user = JSON.parse(lsUser)
    } catch (error) {
      this.user = undefined;
    }
  }

  login(): void {
    this.user = {
      email: 'john.doe@email.com',
      name: 'John',

    };

    localStorage.setItem(USER_KEY, JSON.stringify(this.user));
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(USER_KEY);
  }

}
