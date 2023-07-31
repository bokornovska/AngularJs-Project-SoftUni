import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';


import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged, 
  UserProfile,
} from 'firebase/auth';

import { ToastrService } from 'ngx-toastr';

let userdata!: any;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: any;
  isLogged: boolean = false;
  token!: any;
  uid!: any;
  returnUrl!: string;


  constructor(
    private fireAuth: AngularFireAuth, 
    private router: Router,
    
    ) { }

  //login method

  login(email:string, password:string){

    this.fireAuth.signInWithEmailAndPassword(email, password)
    .then(() => {
      localStorage.setItem('token', 'true');
      this.router.navigate(['/'])
    },
    error => {
      alert(error.message);
      this.router.navigate(['/login'])
    })
  }

  // //register method

  register(email:string, password:string){
    this.fireAuth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert('Regisration successful!');
      this.router.navigate(['/login']);
    }, error => {
      alert('Regisration successful!');
      this.router.navigate(['/register']);
    })

  }


//logout method

logout(){
  this.fireAuth.signOut().then(() => {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }, error => {
    alert(error.message)
  })
}



// REGISTER

  // register(email: string, password: string) {

  //   const auth = getAuth();

  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then(data => {
  //       onAuthStateChanged(auth, (user) => {
  //         if (user) {
  //           userdata = user;
  //           this.token = userdata.accessToken;
  //           localStorage.setItem('token', this.token);
  //           this.uid = userdata.uid;
  //         }
  //       })

  //       this.router.navigate(['/login']);
  //       this.toastr.success('Registered', 'Success');
  //       this.isLogged = true;
  //     })
  //     .catch(error => {
  //       this.toastr.error('Unsuccessful registration', 'Error')
  //     });
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

  //       this.toastr.success('Logged In', 'Success');
  //       this.isLogged = true;

  //     })
  //     .catch(error => {
  //       this.toastr.error('Unsuccessful login', 'Error')
  //     })
  // }

  // logout() {
  //   const auth = getAuth();
  //   signOut(auth)
  //     .then(() => {
  //       this.token = null;
  //       localStorage.removeItem('token');
  //     })

  // }

  // getToken() {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       userdata = user;
  //       this.token = userdata.accessToken;
  //     }
  //   })

  //   return this.token;
  // }

  // isAuthenticated(): boolean {
  //   return this.token != null;
  // }

  // getUser() {
  //   const auth = getAuth()
  //   return auth.currentUser;
  // }

  // editUser(user: UserProfile): Observable<UserProfile> {
  //   return this.http.patch<UserProfile>(`${USERS_URL}.json`, user);
  // };

  // getUserProfile(userId: string): Observable<any> {
  //   return this.http.get<any>(`${USERS_URL}${userId}.json`)
  // };



}
