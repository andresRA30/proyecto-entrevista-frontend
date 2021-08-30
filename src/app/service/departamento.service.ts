import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Departamento, Empleado } from '../interfaces/interfaces';
const url = environment.URL;
@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http: HttpClient) { }


  getMaestroDepartamentos() {
    return this.http.get<Departamento[]>(`${url}/maestro-departamentos`);
  }
  getMestroDepartamento(id: number) {
    return this.http.get<Departamento>(`${url}/maestro-departamentos/${id}`);
  }
  crearMaestroDepartamento(nombre: string) {
    const body = { nombre };
    return this.http.post<Departamento>(`${url}/maestro-departamentos`, body);
  }
  updateMaestroDepartamento(id: number, nombre: string) {
    const body = { nombre };
    return this.http.put<Departamento>(`${url}/maestro-departamentos/${id}`, body);

  }
  getDetalleEmpleados(id: number) {
    return this.http.get<Empleado[]>(`${url}/detalle-empleados/${id}`);
  }
  DeleteDetalleEmpleado(id: number) {
    return this.http.delete<Empleado>(`${url}/detalle-empleados/${id}`);
  }
  crearDetalleEmpleado(id_departamento: number, empleado: Empleado) {
    const { nombre, salario } = empleado
    const body = { id_departamento, nombre, salario };
    return this.http.post<Empleado>(`${url}/detalle-empleados`, body);
  }
}
