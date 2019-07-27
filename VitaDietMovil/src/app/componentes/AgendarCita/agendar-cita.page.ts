import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.page.html',
  styleUrls: ['./agendar-cita.page.scss'],
})
export class AgendarCitaPage implements OnInit {

  usuario: string;
  pass: string;
  
  constructor(private authFB: AuthService, public router: Router, public alertController: AlertController) { }

  ngOnInit() {
  }

  onSubmitAgendar(){
    this.authFB.login(this.usuario+"@mail.com" , this.pass).then(response => {
      this.router.navigate(['/home']);
    }).catch(err => alert('Se ha agendado la cita'));
  }

  
}

export class AlertExample {

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Agendar Cita',
     
      message: 'Se va a agendar la cita',
      buttons: ['Regresar','Confirmar']
    });

    await alert.present();
  }
}
