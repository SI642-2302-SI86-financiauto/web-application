import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  constructor(private router: Router) {}

  redirigir() {
    this.router.navigate(['/credit']); // Reemplaza con la ruta real de tu componente credit-vehicle
  }
}
