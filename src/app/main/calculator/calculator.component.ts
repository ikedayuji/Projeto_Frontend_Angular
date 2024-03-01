import { Component } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { GrausCelsiusComponent } from '../graus-celsius/graus-celsius.component';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [MatSliderModule, GrausCelsiusComponent],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  valor: number = 0;
  novoValor: number = 0;

  constructor() {
    this.converter();
  }

  mostrarValor(value: number): string {
    return value + "";
  }

  converter() {
    this.novoValor = (this.valor * 1.8)+32;
  }

}
