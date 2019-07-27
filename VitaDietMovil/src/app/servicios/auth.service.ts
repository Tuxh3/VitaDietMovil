import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFB : AngularFireAuth) { }

  login(usuario:string, password:string){

    return new Promise((resolve, rejected) => {
      this.authFB.auth.signInWithEmailAndPassword(usuario, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
  }

  register(usuario:string, password:string){
    return new Promise((resolve, rejected) =>{
      this.authFB.auth.createUserWithEmailAndPassword(usuario, password).then(res =>{
        resolve(res);
      }).catch( err => rejected(err));
    });
  }
}
