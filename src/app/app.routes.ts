import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { segGuard } from './guard/seguridad.guard';
import { LandingComponent } from './components/landing/landing.component';
import { CrearClienteComponent } from './components/cliente/crear-cliente/crear-cliente.component';
import { ListarReporteComponent } from './components/reporte/listar-reporte/listar-reporte.component';
import { ListarOperacionComponent } from './components/operacion/listar-operacion/listar-operacion.component';
import { CrearOperacionComponent } from './components/operacion/crear-operacion/crear-operacion.component';
import { ListarClienteComponent } from './components/cliente/listar-cliente/listar-cliente.component';

export const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent,
    canActivate: [segGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path:'nuevo-cliente',
    component:CrearClienteComponent,
  },
  {
    path:'ver-clientes',
    component:ListarClienteComponent,
  },
  {
    path:'nueva-operacion',
    component:CrearOperacionComponent,
  },
  {
    path:'ver-operacion',
    component:ListarOperacionComponent,
  },
  {
    path:'ver-reportes',
    component:ListarReporteComponent,
  }
];
