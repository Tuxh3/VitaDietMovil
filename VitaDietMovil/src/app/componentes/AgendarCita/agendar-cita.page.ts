import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { AlertController, IonDatetime } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agendar-cita',
  templateUrl: './agendar-cita.page.html',
  styleUrls: ['./agendar-cita.page.scss'],
})
export class AgendarCitaPage implements OnInit {

  citas;
  salida: Array<any>;
  cita;
  constructor(private store: AuthService) { 
    this.getCitas();
    
  }

  ngOnInit() {
    
  }

  getCitas(){
    this.citas = this.store.obtenerCitas().subscribe(
      res => {
        this.salida = res;
        console.log(res);
      });
  }

  getCita(id: string){
    this.store.obtenerCita(id).subscribe(res => {
      this.cita = res;
      console.log(this.cita);
    });
  }

  registrarCita(nutricionista:string, fecha:IonDatetime){
    this.store.agendarcita(nutricionista,fecha);
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
