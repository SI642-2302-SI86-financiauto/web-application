import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {User} from "../../model/user";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';
  loginError: boolean = false;
  users: any[] = [];
  form: FormGroup;


  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder,) {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
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

  onSubmit() {
    if (this.users) {
      const user = this.users.find(
        (u: User) => u.email === this.username && u.password === this.password
      );
      if (user) {
        console.log('Usuario autenticado con éxito:', user);
        this.router.navigate(['/homepage']);
        localStorage.setItem('userId', String(user.id));
        localStorage.setItem('firstName', String(user.firstName));
        localStorage.setItem('lastName', String(user.lastName));
        localStorage.setItem('email', String(user.email));
        localStorage.setItem('password', String(user.password));
        localStorage.setItem('dateOfBirth', String(user.dateOfBirth));

        const userId = localStorage.getItem('userId')
        console.log(userId);
      } else {
        console.log('Credenciales incorrectas o usuario no encontrado.');
        alert("Usuario o contraseña incorrectos");
      }
    } else {
      console.log('Error: No se han cargado los datos de usuario.');

    }
  }

  ngOnInit(): void {
    this.authService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
        console.log('Datos de usuario cargados con éxito:', data);
      },
      (error: any) => {
        console.error('Error al cargar los datos de usuario:', error);
        // Puedes manejar el error aquí, como mostrar un mensaje de error al usuario.
      }
    );  }

  loginForm: FormGroup = this.fb.group({
    email: ['', { validators: [Validators.required], updateOn: 'change'}],
    password: ['', {validators: [Validators.required ], updateOn: 'change'}]
  })
}
