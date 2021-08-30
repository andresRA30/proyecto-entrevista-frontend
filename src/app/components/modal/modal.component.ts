import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Empleado } from '../../interfaces/interfaces';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  empleadoForm!: FormGroup;

  @Output() crear = new EventEmitter();
  empleado!: Empleado;
  constructor(private fb: FormBuilder) {
    this.empleadoForm = fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      salario: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }
  crearEmpleado() {
    this.empleado = this.empleadoForm.value;
    this.crear.emit(this.empleado)
    this.empleadoForm.reset();

  }
}
