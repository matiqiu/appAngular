import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {

  totalCuenta = 0;

  porcentaje = 0;

  cantPersonas = 1;

  totalXPersona = 0;

  propinaTotal = 0;

  limpiar(): void {
    this.totalCuenta = 0;
    this.porcentaje = 0;
    this.cantPersonas = 1;
    this.totalXPersona = 0;
    this.propinaTotal = 0;
  }

  constructor() {

  }

  ngOnInit(): void {

  }

}
