import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { AngularFireModule } from '@angular/fire/compat';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) { }

  async register (email:string, password:string) {
    try{
      return await this.afauth.createUserWithEmailAndPassword(email, password);
    }catch(err){
      console.log("Error login; ",err);
      return null;
    }
  }

  async login (email:string, password:string) {
    try{
      return await this.afauth.signInWithEmailAndPassword(email, password);
    }catch(err){
      console.log("Error login; ",err);
      return null;
    }
  }
  async loginWithGoogle (email:string, password:string) {
    try{
      return await this.afauth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }catch(err){
      console.log("Error login con google; ",err);
      return null;
    }
  }

  getUserLogged(){
    return this.afauth.authState;
  }
  logout(){
    this.afauth.signOut();
  }

}
