import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { PesoService } from 'src/app/services/peso.service';
import { Peso } from 'src/app/interfaces/peso';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  private loading: any;
  public pesos = new Array<Peso>();
  private pesosSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private pesoService: PesoService,
    private toastCtrl: ToastController
  ) {
    this.pesosSubscription = this.pesoService.getPesos().subscribe(data => {
      this.pesos = data;
    });
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.pesosSubscription.unsubscribe();
  }

  async logout() {
    await this.presentLoading();

    try {
      await this.authService.logout();
    } catch (error) {
      console.error(error);
    } finally {
      this.loading.dismiss();
    }
  }

  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Espere...' });
    return this.loading.present();
  }

  async deletePeso(id: string) {
    try {
      await this.pesoService.deletePeso(id);
    } catch (error) {
      this.presentToast('Error al intenar eliminar');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }
}