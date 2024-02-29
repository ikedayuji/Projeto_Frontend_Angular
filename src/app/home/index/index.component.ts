import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  standalone: false
})
export class IndexComponent {

  constructor(private router: Router) {
  }

  goToPage() {
    this.router.navigate(['main']);
  }
}
