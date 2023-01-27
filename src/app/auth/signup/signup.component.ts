import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Users } from 'src/app/shared/user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  constructor(private authService: AuthService, private dataStorage: DataStorageService){}


  ngOnInit(){

  }



  async onSignUp(form: NgForm){
    const nome = form.value.name;
    const email = form.value.email;
    const password = form.value.password;
    const uid = form.value.uid;

    let newUser = new Users(nome, email, uid, []);

    await this.authService.signupUser(email, password);

    let userToken = this.authService.getuid();

    this.dataStorage.storeNewUsers(newUser, userToken)
    .subscribe(
      (response: any) => {
        console.log(response);
      }
    );

  }

  //SEM O SUBSCRIBE NAO FUNCIONA ASSINADO: MAX
}
