import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpHeaders,
  HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   urlAuth = 'https://dev.saunya.com/api/v2/auth';
   url = 'https://dev.saunya.com/api/v2';
   urlLocalhost ='http://192.168.100.2:8000/saunya/api/v2/auth';
   userData: any;

    constructor(
      private http: HttpClient,
      public afStore: AngularFirestore,
      public ngFireAuth: AngularFireAuth,
      public router: Router,
      public ngZone: NgZone
    ) {
      this.ngFireAuth.authState.subscribe(user => {
        if (user) {
          this.userData = user;

          Storage.set({
            key: 'emailVerified',
            value: ''+user.emailVerified
          });

        } else {
          Storage.set({
            key: 'emailVerified',
            value: ''
          });
        }
      })
    }

  public  signUp(n: string, e: string, p: string){

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
     };
    const data = {
       name : n,
       email : e,
       password : p
     };



    return this.http.post(this.urlAuth + '/signup', data, httpHeader);

  }


  loginFB(email:string, password:string):Promise<any> {

    let interval=null;
    return new Promise( (resolve, reject) => {

      this.ngFireAuth.signInWithEmailAndPassword(email, password)
        .then((user) => {


          interval = setInterval(() => {
            user.user.reload().then(
              () => {
                if (interval && user.user.emailVerified) {
                  clearInterval(interval);
                    interval=null;


                    resolve("true");

                }else{

                  reject("false");

                }
              }
            );
          }, 900);


        })


        .catch((err:any)=>{
          reject("false");
        });




    })

  }


  public  login(e: string, p: string){
    const httpHeader = {
       headers: new HttpHeaders({
         'Content-Type' : 'application/json'
       })
     };
    const data = {
       email : e,
       password : p
     };

    return this.http.post(this.urlAuth + '/login', data, httpHeader);

  }


  public  updateName(n: string){
    const httpHeader = {
       headers: new HttpHeaders({
         'Content-Type' : 'application/json'
       })
     };
    const data = {
       name : n
     };
     console.log("data update name:"+JSON.stringify(data));
    return this.http.post(this.url + '/user/info/update', data, httpHeader);

  }



  public  updatePassword(p: string){
    const httpHeader = {
       headers: new HttpHeaders({
         'Content-Type' : 'application/json'
       })
     };
    const data = {
       password : p
     };

    return this.http.post(this.urlAuth + '/password/create', data, httpHeader);

  }

  public  logout(){
    const httpHeader = {
       headers: new HttpHeaders({
         'Content-Type' : 'application/json'
       })
     };
    const data = {};

    return this.http.post(this.urlAuth + '/logout', data, httpHeader);

  }

  public sendPasswordResetEmail(e: string){

    const httpHeader = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    };
    const data = {
        email : e,
      };
      console.log("email:"+JSON.stringify(data));
    return this.http.post(this.urlAuth + '/password/create', data, httpHeader);

  }


   // Login in with email/password
   SignIn(email, password) {
    return this.ngFireAuth.signInWithEmailAndPassword(email, password)
  }

  // Register user with email/password
  RegisterUser(email, password) {
    return this.ngFireAuth.createUserWithEmailAndPassword(email, password)
  }

    // Returns true when user's email is verified
    //emailVerified
    get isEmailVerified(): boolean {

      const user = JSON.parse(localStorage.getItem('user'));
      return (user.emailVerified !== false) ? true : false;
    }

  // Email verification when new user register
  SendVerificationMail() {
    return this.ngFireAuth.currentUser.then(u=>{
      u.sendEmailVerification().then(res=>{

      },err=>{

      })

    })
  }






}
