import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaestrosRoutingModule } from './maestros-routing.module';
import { ConsultaMaestrosComponent } from './consulta-maestros/consulta-maestros.component';
import { ModificacionMaestrosComponent } from './modificacion-maestros/modificacion-maestros.component';
import { ConsultaDetalleComponent } from './consulta-detalle/consulta-detalle.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentModule } from '../components/component.module';


@NgModule({
  declarations: [
    ConsultaMaestrosComponent,
    ModificacionMaestrosComponent,
    ConsultaDetalleComponent
  ],
  exports: [
    ConsultaMaestrosComponent,
    ModificacionMaestrosComponent,
    ConsultaDetalleComponent
  ],
  imports: [
    CommonModule,
    MaestrosRoutingModule,
    ReactiveFormsModule,
    ComponentModule
  ]
})
export class MaestrosModule { }
