import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-crear-operacion',
  imports: [
    MatCardModule,
    MatFormField,
    MatLabel,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './crear-operacion.component.html',
  styleUrl: './crear-operacion.component.css'
})
export class CrearOperacionComponent {

}
