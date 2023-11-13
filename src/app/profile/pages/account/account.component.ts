import { UserService } from './../../../services/user.service';
import { Router } from '@angular/router';
import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';

  updatePasswordForm!: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    const userId = localStorage.getItem('userId');
    console.log(userId);
    this.userName = localStorage.getItem('firstName') || '';
    console.log(this.userName);
    this.lastName = localStorage.getItem('lastName') || '';
    console.log(this.lastName);
    this.email = localStorage.getItem('email') || '';
    console.log(this.email);
    // DateOfBirth se debe manejar como una fecha en lugar de una cadena
    const dateOfBirth = localStorage.getItem('dateOfBirth') || '';
    console.log(dateOfBirth);
    this.password = localStorage.getItem('password') || '';

    // Inicialización del formulario para actualizar la contraseña
    this.updatePasswordForm = this.formBuilder.group({
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  updatePassword() {
    if (this.updatePasswordForm.valid) {
      
      const newPassword = this.updatePasswordForm.value.newPassword;
      const confirmPassword = this.updatePasswordForm.value.confirmPassword;

      // Verificar que la nueva contraseña y la confirmación sean iguales
      if (newPassword === confirmPassword) {
        const userData = {
          id: localStorage.getItem('userId') || 0,
          firstName: localStorage.getItem('firstName') || '',
          lastName: localStorage.getItem('lastName') || '',
          email: localStorage.getItem('email') || '',
          password: newPassword,
          dateOfBirth: localStorage.getItem('dateOfBirth') || '',
        } 
        console.log('Datos enviados al servidor:', userData);
        this.userService.updatePassword(userData).subscribe(
          (response: any) => {
            console.log('Contraseña actualizada correctamente.', response);
            alert("Contraseña actualizada correctamente");
          },
          (error: any) => {
            console.error('Error al actualizar la contraseña:', error);
            // Maneja los errores según tus necesidades
          }
        );
      } else {
        this.updatePasswordForm.setErrors({ passwordMismatch: true });
        console.log('La nueva contraseña y la confirmación no coinciden.');
        alert("Las contraseñas no coinciden");
      }
    } else {
      console.log('Por favor, completa todos los campos.');
    }
  }
}
