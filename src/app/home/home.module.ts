import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ComponentesModule } from '../componentes/componentes.module';
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    CabeceraComponent,
    HomePageRoutingModule,
    ComponentesModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
