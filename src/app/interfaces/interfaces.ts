export interface Departamento {
    id: number;
    nombre: string;
}
export interface Empleado {
    id: number;
    nombre: string;
    departamento: string;
    salario: number;
}