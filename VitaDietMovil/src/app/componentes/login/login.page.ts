import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router'; 
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string;
  pass: string;
  constructor(private authFB: AuthService, public router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authFB.login(this.usuario+"@mail.com" , this.pass).then(response => {
      this.router.navigate(['/home']);
    }).catch(err => alert('Usuario y contraseña invalidos'));
  }

}
