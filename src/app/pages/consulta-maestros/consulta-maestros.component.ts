import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartamentoService } from '../../service/departamento.service';

@Component({
  selector: 'app-consulta-maestros',
  templateUrl: './consulta-maestros.component.html',
  styleUrls: ['./consulta-maestros.component.css']
})
export class ConsultaMaestrosComponent implements OnInit {

  departamentos: any[] = [];
  mostrarDepartamento: boolean = false;
  constructor(private departamentoService: DepartamentoService, private router: Router) { }

  ngOnInit(): void {
    this.departamentoService.getMaestroDepartamentos()
      .subscribe((departamentos: any) => {
        console.log(departamentos)
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
