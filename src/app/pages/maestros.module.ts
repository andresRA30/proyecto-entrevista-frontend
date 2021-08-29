import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaestrosRoutingModule } from './maestros-routing.module';
import { ConsultaMaestrosComponent } from './consulta-maestros/consulta-maestros.component';
import { ModificacionMaestrosComponent } from './modificacion-maestros/modificacion-maestros.component';
import { ConsultaDetalleComponent } from './consulta-detalle/consulta-detalle.component';
import { EliminarDetalleComponent } from './eliminar-detalle/eliminar-detalle.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ConsultaMaestrosComponent,
    ModificacionMaestrosComponent,
    ConsultaDetalleComponent,
    EliminarDetalleComponent
  ],
  exports: [
    ConsultaMaestrosComponent,
    ModificacionMaestrosComponent,
    ConsultaDetalleComponent,
    EliminarDetalleComponent
  ],
  imports: [
    CommonModule,
    MaestrosRoutingModule,
    ReactiveFormsModule
  ]
})
export class MaestrosModule { }
