import { Component, OnInit } from '@angular/core';
import { PesoService } from 'src/app/services/peso.service';
import { ActivatedRoute } from '@angular/router';
import { Peso } from 'src/app/interfaces/peso';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  private pesoId: string = null;
  public peso: Peso = {};
  private loading: any;
  private pesoSubscription: Subscription;
  


  constructor(private pesoService: PesoService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private toastCtrl: ToastController,
   
  ) {
    this.pesoId = this.activatedRoute.snapshot.params['id'];

    if (this.pesoId) this.loadPeso();
  }
  ngOnInit() { }

  ngOnDestroy() {
    if (this.pesoSubscription) this.pesoSubscription.unsubscribe();
  }

  loadPeso() {
    this.pesoSubscription = this.pesoService.getPeso(this.pesoId).subscribe(data => {
      this.peso = data;
    });
  }

  async savePeso() {
    await this.presentLoading();

    this.peso.pesoId = this.authService.getAuth().currentUser.uid;

    if (this.pesoId) {
      try {
        await this.pesoService.updatePeso(this.pesoId, this.peso);
        await this.loading.dismiss();

        //this.navCtrl.navigateBack('/ingreso');//ingreso
        this.navCtrl.navigateBack('/pesolisto');//ingreso
      } catch (error) {
        this.presentToast('Error al intentar guardar');
        this.loading.dismiss();
      }
    } else {

      try {
        await this.pesoService.addPeso(this.peso);
        await this.loading.dismiss();

        //this.navCtrl.navigateBack('/ingreso');
        this.navCtrl.navigateBack('/pesolisto');
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