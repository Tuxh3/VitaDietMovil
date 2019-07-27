import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  usuarioN: string;
  passN: string;
  constructor(private authBD: AuthService) { }

  ngOnInit() {
  }

  onSubmitRegister(){
    this.authBD.register(this.usuarioN + '@mail.com', this.passN).then(res => {
      alert('Registro Exitoso');
    }).catch(err => alert('Error al autenticar'));
  }
}
