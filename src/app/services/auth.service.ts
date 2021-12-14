import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser = {} as IUser;

  constructor(public afAuth: AngularFireAuth, private http: HttpClient) {
    this.getUser();
  }

  async getUser() {
    return this.afAuth.authState.subscribe(async user => {
      console.log('estado del usuario', user);
      if (!user) {
        return;
      }
      this.user.uid = user.uid;
      this.user.nombre = user.displayName;
      this.user.email = user.email;
      // let token = await user.getIdToken();
      // sessionStorage.setItem('token', token);
    })
  }

  getTokenSpotify() {
    let body = new URLSearchParams();
    body.set('grant_type', environment.spotify.grant_type);
    body.set('client_id', environment.spotify.client_id);
    body.set('client_secret', environment.spotify.client_secret);

    let headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

    return this.http.post(environment.spotify.urlToken, body.toString(), { headers })
      .pipe(map((data: any) => data)).subscribe(data => {
        sessionStorage.setItem('token', data?.access_token);
      });
  }

  isLogged() {
    return this.user ? true : false;
  }

  isEmptyObject(obj: any) {
    return Object.getOwnPropertyNames(obj).length === 0;
  }

  logout() {
    this.user = {} as IUser;
    sessionStorage.removeItem('token');
    return this.afAuth.signOut();
  }

  register() {
    return this.afAuth.createUserWithEmailAndPassword('andresherreran97@gmail.com', '123456')
      .then(user => {
        console.log('se creo usuario', user);
      }).catch(errorUser => {
        console.log('errorUser', errorUser)
      }).catch(error => {
        console.log('errorUser2', error)
      })
  }

  // login() {
  //   return this.afAuth.signInWithEmailAndPassword('andresherreran97@gmail.com', '123456')
  //     .then(login => {
  //       console.log(login)
  //     })
  //     .catch(error => {
  //       console.log('errorLogin', error)
  //     });
  // }

  login() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
}
