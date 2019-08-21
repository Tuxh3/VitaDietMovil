import { Component, OnInit } from '@angular/core';
import { PesoService } from 'src/app/services/peso.service';
import { ActivatedRoute } from '@angular/router';
import { Peso } from 'src/app/interfaces/peso';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';
import { Sugerencia } from 'src/app/interfaces/sugerencia';
import { SugerenciaService } from 'src/app/services/sugerencia.service';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.page.html',
  styleUrls: ['./sugerencia.page.scss'],
})
export class SugerenciaPage implements OnInit {
  private pesoId: string = null;
  public sugerencia: Sugerencia = {};
  private loading: any;
  private sugerenciaSubscription: Subscription;

  constructor(private sugerenciaService: SugerenciaService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController,

  ) {
    this.pesoId = this.activatedRoute.snapshot.params['id'];

    if (this.pesoId) this.loadSugerencia();
  }
  ngOnInit() { }

  ngOnDestroy() {
    if (this.sugerenciaSubscription) this.sugerenciaSubscription.unsubscribe();
  }

  loadSugerencia() {
    this.sugerenciaSubscription = this.sugerenciaService.getSugerencia(this.pesoId).subscribe(data => {
      this.sugerencia = data;
    });
  }

  async saveSugerencia() {
    await this.presentLoading();

    this.sugerencia.pesoId = this.authService.getAuth().currentUser.uid;

    if (this.pesoId) {
      try {

        if ((this.sugerencia.calificacion <= 10 )) {
          try {
            this.navCtrl.navigateBack('/sugerencialista');//ingreso
          } catch (error) {
            this.presentToast('Error al intentar guardar');
            this.loading.dismiss();

          }
        }
        await this.sugerenciaService.updateSugerencia(this.pesoId, this.sugerencia);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/sugerencialista');//ingreso
      } catch (error) {
        this.presentToast('Error al intentar guardar');
        this.loading.dismiss();
      }
    } else {
      if ((this.sugerencia.calificacion <= 10)) {
          try {
            this.navCtrl.navigateBack('/sugerencialista');//ingreso
          } catch (error) {
            this.presentToast('Error al intentar guardar');
            this.loading.dismiss();
          
          }
        }

      try {
        await this.sugerenciaService.addSugerencia(this.sugerencia);
        await this.loading.dismiss();

        this.navCtrl.navigateBack('/sugerencialista');
      } catch (error) {
        this.presentToast('Error al intentar guardar');
        this.loading.dismiss();
      }
    }
  }


  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Espere...' });
    return this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 2000 });
    toast.present();
  }


}








