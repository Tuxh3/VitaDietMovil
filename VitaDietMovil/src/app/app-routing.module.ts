import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'  },  
 // { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'registrar', loadChildren: './pages/registrar/registrar.module#RegistrarPageModule'},
  { path: 'registrar/:id', loadChildren: './pages/registrar/registrar.module#RegistrarPageModule', canActivate:[AuthGuard]},
  { path: 'ingreso', loadChildren: './pages/ingreso/ingreso.module#IngresoPageModule' },
  { path: 'login-usuario', loadChildren: './pages/login-usuario/login-usuario.module#LoginUsuarioPageModule', canActivate: [LoginGuard] },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
