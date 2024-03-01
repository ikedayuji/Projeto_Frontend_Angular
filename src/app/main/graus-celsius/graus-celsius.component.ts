import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-graus-celsius',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './graus-celsius.component.html',
  styleUrl: './graus-celsius.component.scss'
})
export class GrausCelsiusComponent {
  @Input() temperatura!: number;
  @Input() titulo!: string;
}
