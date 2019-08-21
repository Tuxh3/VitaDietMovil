import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule' },
  { path: 'crear-usuario', loadChildren: './componentes/crear-usuario/crear-usuario.module#CrearUsuarioPageModule' },
  { path: 'cancelar-pedido', loadChildren: './componentes/cancelar-pedido/cancelar-pedido.module#CancelarPedidoPageModule' },
  { path: 'agendar-cita', loadChildren: './componentes/AgendarCita/agendar-cita.module#AgendarCitaPageModule'}

 
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
