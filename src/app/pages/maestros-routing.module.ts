import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaDetalleComponent } from './consulta-detalle/consulta-detalle.component';
import { ConsultaMaestrosComponent } from './consulta-maestros/consulta-maestros.component';
import { ModificacionMaestrosComponent } from './modificacion-maestros/modificacion-maestros.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultaMaestrosComponent
  },
  {
    path: 'crearDepartamento',
    component: ModificacionMaestrosComponent
  },

  {
    path: 'modificarDepartamento/:id',
    component: ModificacionMaestrosComponent
  },
  {
    path: 'consultaDetalle/:id',
    component: ConsultaDetalleComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaestrosRoutingModule { }
