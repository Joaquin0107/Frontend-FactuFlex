import {Users}from "./Users";

export class Cliente{
    IdCliente:number=0;
    nombreEmpresa:string="";
    ruc:string="";
    direccion:string="";
    telefonoEmpresa:string="";
    nombreResponsable:string="";
    apellidos:string="";
    telefonoResponsable:string="";
    dni:string="";
    idUsuario: Users=new Users();
}