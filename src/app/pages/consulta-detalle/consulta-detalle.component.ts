import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from 'src/app/service/departamento.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta-detalle',
  templateUrl: './consulta-detalle.component.html',
  styleUrls: ['./consulta-detalle.component.css']
})
export class ConsultaDetalleComponent implements OnInit {
  empleados: any[] = [];
  constructor(private departamentoService: DepartamentoService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getDetalleEmpleado(params.id)
    })

  }
  getDetalleEmpleado(id: number) {
    this.departamentoService.getDetalleEmpleados(id)
      .subscribe((resp: any) => {
        console.log(resp)
        this.empleados = resp;
      })
  }
  borrar(empleado: any) {
    Swal.fire({
      title: `Seguro que quiere eliminar a ${empleado.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Empleado ha sido eliminado.',
          'success'
        )
      }
    })
    console.log("se elimino", empleado)
  }
}
