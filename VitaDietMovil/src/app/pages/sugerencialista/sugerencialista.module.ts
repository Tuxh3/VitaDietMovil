import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SugerencialistaPage } from './sugerencialista.page';

const routes: Routes = [
  {
    path: '',
    component: SugerencialistaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SugerencialistaPage]
})
export class SugerencialistaPageModule {}
