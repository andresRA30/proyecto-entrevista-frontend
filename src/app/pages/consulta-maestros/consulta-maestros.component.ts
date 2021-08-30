import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartamentoService } from '../../service/departamento.service';
import { Departamento } from '../../interfaces/interfaces';

@Component({
  selector: 'app-consulta-maestros',
  templateUrl: './consulta-maestros.component.html',
  styleUrls: ['./consulta-maestros.component.css']
})
export class ConsultaMaestrosComponent implements OnInit {

  departamentos: Departamento[] = [];
  mostrarDepartamento: boolean = false;
  constructor(private departamentoService: DepartamentoService, private router: Router) { }

  ngOnInit(): void {
    this.departamentoService.getMaestroDepartamentos()
      .subscribe(departamentos => {

        this.departamentos = departamentos;
      })
  }
  consultarDepartamento() {
    this.mostrarDepartamento = !this.mostrarDepartamento;
  }
  modificar(id: number) {
    this.router.navigateByUrl(`modificarDepartamento/${id}`)
  }
  detalleEmpleado(id: number) {
    this.router.navigateByUrl(`consultaDetalle/${id}`)
  }
}
