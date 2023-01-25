import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/auth';

@Injectable()
export class AuthService{

    constructor(private router: Router){}


    token!: string;
    signupUser(email: string, password: string){
        let auth = firebase.getAuth();
        firebase.createUserWithEmailAndPassword(auth, email, password)
        .catch(
            error => console.log(error)
        )
    }

    signinUser(email: string, password: string){
        let auth = firebase.getAuth();
        firebase.signInWithEmailAndPassword(auth, email, password)
        .then(
            response => {
                this.router.navigate(['/']);
                auth.currentUser?.getIdToken()
                .then(
                    (token: string) => {
                        this.token = token
                        this.router.navigate(['/recipes']);
                    }
                );
               }
        )
        .catch(
            error => console.log(error)
        );
    }

    getToken(){
        const auth = firebase.getAuth();
        auth.currentUser?.getIdToken()
        .then(
            (token: string) => {
                this.token = token
            }
        );
        // console.log(this.token);
        return this.token;
    }

    isAuth(){
        return this.token != null && this.token != 'null';
    }

    logout(){
        const auth = firebase.getAuth();
        firebase.signOut(auth);
        this.token = 'null';
        this.router.navigate(['signin']);
    }

    
}