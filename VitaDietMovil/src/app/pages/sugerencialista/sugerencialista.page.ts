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
  selector: 'app-sugerencialista',
  templateUrl: './sugerencialista.page.html',
  styleUrls: ['./sugerencialista.page.scss'],
})
export class SugerencialistaPage implements OnInit {

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
   
  }
  ngOnInit() { }

  


}
  

 
  


  



