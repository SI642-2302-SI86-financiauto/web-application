import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe((users: any[]) => {
      if (users.length > 0) {
        // Autenticación exitosa
        this.loginError = false;
        console.log('Inicio de sesión exitoso');

        // Redirigir al usuario a la página de inicio (homepage)
        this.router.navigate(['/homepage']);
      } else {
        // Autenticación fallida
        this.loginError = true;

        console.log('Nombre de usuario o contraseña incorrectos');
        alert("Usuario o contraseña incorrectos");

      }
    });
  }
}
