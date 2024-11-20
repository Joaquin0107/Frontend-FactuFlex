import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { segGuard } from './guard/seguridad.guard';
import { LandingComponent } from './components/landing/landing.component';

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
];
