import { Cliente } from "./Cliente";

export class Operaciones{
    idTransaccion:number=0;
    idCliente:Cliente=new Cliente();
    montoOriginal:number=0;
    fechaEmision:Date=new Date(Date.now())
    fechaVencimiento: Date=new Date(Date.now())
    divisa:string="";
    tasaAsignada:number=0;
    tipoTasa:string="";
    capitalizacion:string="";
    fechaPago:Date=new Date(Date.now())
    tep:number=0;
    tasaDescuento:number=0;
    descuento:number=0;
    saldoFinal:number=0;
    tcea:number=0;
    estado:string="";
}