import { Component } from '@angular/core';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { CalculatorComponent } from '../calculator/calculator.component';

@Component({
  selector: 'app-mypage',
  standalone: true,
  imports: [SidenavComponent, CalculatorComponent],
  templateUrl: './mypage.component.html',
  styleUrl: './mypage.component.scss'
})
export class MypageComponent {

}
