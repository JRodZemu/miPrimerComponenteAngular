import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludaComponent } from './saluda/saluda.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SaludaComponent,
    CabeceraComponent,
    FormsModule
  ],
  exports: [CommonModule,
    SaludaComponent,
    CabeceraComponent

  ]
})
export class ComponentesModule { }
