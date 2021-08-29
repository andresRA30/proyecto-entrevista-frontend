import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  constructor(private http: HttpClient) { }


  getMaestroDepartamentos() {
    return this.http.get("http://localhost:4000/maestro-departamentos");
  }
  getMestroDepartamento(id: number) {
    return this.http.get(`http://localhost:4000/maestro-departamentos/${id}`);

  }
  updateMaestroDepartamento(id: number, nombre: string) {
    const body = { nombre };
    return this.http.put(`http://localhost:4000/maestro-departamentos/${id}`, body);

  }
  getDetalleEmpleados(id: number) {
    return this.http.get(`http://localhost:4000/detalle-empleados/${id}`);
  }
  DeleteDetalleEmpleado(id: number) {
    return this.http.delete(`http://localhost:4000/detalle-empleados/${id}`);
  }
}
