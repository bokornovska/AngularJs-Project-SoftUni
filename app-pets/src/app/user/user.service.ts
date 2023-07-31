import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged, 
  UserProfile,
} from 'firebase/auth';

import { ActivatedRoute, Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';

let userdata!: any;

const USERS_URL = 'https://pets-db-37c5b-default-rtdb.firebaseio.com/users/';

// const USER_KEY = '[user]';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user!: any;
  isLogged: boolean = false;
  token!: any;
  uid!: any;
  returnUrl!: string;

  // user: User | undefined;

  // get isLogged(): boolean {
  //   return !!this.user;
  // }

  constructor( private router: Router, private http: HttpClient,
    private route: ActivatedRoute) {

    // try {
    //   const lsUser = localStorage.getItem(USER_KEY) || '';
    //   this.user = JSON.parse(lsUser)
    // } catch (error) {
    //   this.user = undefined;
    // }
  }

  register(
    email:string, 
    name:string, 
    password:string, 
    repass:string){

    return this.http
    .post<User>(`${USERS_URL}.json`, {email, name, password, repass} )
    // .pipe(tap((user) => this.user$$.next(user)));
  }

  // login() {


    // this.httpClient
    // .get<User>(`${USERS_URL}.json`)
    
    // this.user = {
    //   email: 'john.doe@email.com',
    //   name: 'John',

    // };

    // localStorage.setItem(USER_KEY, JSON.stringify(this.user));
  // }

  // login(email: string, password: string) {
  //   const auth = getAuth();

  //   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

  //   signInWithEmailAndPassword(auth, email, password)
  //     .then(data => {
  //       onAuthStateChanged(auth, (user) => {
  //         if (user) {
  //           userdata = user;
  //           this.token = userdata.accessToken;
  //           localStorage.setItem('token', this.token);
  //           this.uid = userdata.uid;
  //         }
  //       })
  //       this.router.navigateByUrl(this.returnUrl)

  //       console.log('Logged in')
  //       // this.toastr.success('Logged In', 'Success');
  //       this.isLogged = true;

  //     })
  //     .catch(error => {
  //       console.log(error)
  //       // this.toastr.error('Unsuccessful login', 'Error')
  //     })
  // }


  logout(): void {
    this.user = undefined;
    // localStorage.removeItem(USER_KEY);
  }

}
