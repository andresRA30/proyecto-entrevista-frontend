import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartamentoService } from '../../service/departamento.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-modificacion-maestros',
  templateUrl: './modificacion-maestros.component.html',
  styleUrls: ['./modificacion-maestros.component.css']
})
export class ModificacionMaestrosComponent implements OnInit {
  departamentoForm!: FormGroup;
  id!: number;
  departamento: any;
  exitoso: boolean = false;
  constructor(private fb: FormBuilder,
    private departamentoService: DepartamentoService,
    private activatedRoute: ActivatedRoute) {
    this.departamentoForm = fb.group({
      nombre: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(param => {
        this.id = param.id;
        this.getDepartamento(this.id)
      })
  }
  getDepartamento(id: number) {
    this.departamentoService.getMestroDepartamento(this.id)
      .subscribe(resp => {
        this.departamento = resp;
        console.log(resp)
        this.departamentoForm.controls['nombre'].setValue(this.departamento.nombre)
      })
  }
  ModificarDepartamento() {
    const nombre = this.departamentoForm.controls['nombre'].value;
    this.departamentoService.updateMaestroDepartamento(this.id, nombre)
      .subscribe(resp => {
        console.log(resp);
        this.exitoso = true;
        setTimeout(() => {
          this.exitoso = false;
        }, 2000)
      })
  }
}
