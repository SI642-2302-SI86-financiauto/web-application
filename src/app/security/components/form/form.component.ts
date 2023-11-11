import { User } from './../../model/user';
import { AbstractControl, AsyncValidatorFn, FormBuilder, Validators } from '@angular/forms';
import { HttpClientModule, HttpStatusCode } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from 'src/app/services/register/register.service';
import { BaseService } from 'src/app/shared/services/base.service';
import { Observable, catchError, map, of } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'register-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  standalone: true
})

export class FormComponent {
  registerForm: FormGroup;
  mostrarMensaje: boolean = false;

  constructor(private registerService: RegisterService, private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email], [this.validarEmailUnico()]],
      dateOfBirth: ['', [Validators.required, this.validarEdadMinima(18)]],
      password: ['', [Validators.required]],
    });
  }

  validarEdadMinima(edadMinima: number) {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control.value) {
        const fechaNacimiento = new Date(control.value);
        const hoy = new Date();
        const edad = hoy.getFullYear() - fechaNacimiento.getFullYear();

        if (edad < edadMinima) {
          return { 'edadMinima': { edad: edad } };
        }
      }

      return null;
    };
  }

  validarEmailUnico(): AsyncValidatorFn {
    return (control: AbstractControl):
      Promise<{ [key: string]: any } | null> | Observable<{ [key: string]: any } | null> => {
      const email = control.value;

      // Si el campo está vacío, no hay necesidad de hacer la validación
      if (!email) {
        return of(null);
      }

      // Llama al servicio para verificar si el email ya está registrado
      return this.authService.getAllUsers().pipe(
        map((users: User[]) => users.find(user => user.email === email)),
        map((foundUser: User | undefined) => (foundUser ? { 'emailRepetido': true } : null)),
        catchError(() => of(null))
      );
    };
  }

  submitApplication() {
    if (this.registerForm.valid) {
      const user = {
        firstName: this.registerForm.value.firstName ?? '',
        lastName: this.registerForm.value.lastName ?? '',
        email: this.registerForm.value.email ?? '',
        password: this.registerForm.value.password ?? '',
        dateOfBirth: this.registerForm.value.dateOfBirth ?? '',
      };

      // Antes de enviar el formulario, verifica si el email es único
      this.authService.getAllUsers().subscribe((users: User[]) => {
        const emailRepetido = users.some(u => u.email === user.email);

        if (!emailRepetido) {
          // El email es único, procede con el registro
          this.registerService.register(user).subscribe((data) => {
            console.log(data.status, data.body);
            if (data.status === HttpStatusCode.Created) {
              this.router.navigateByUrl('/');
            }
          });
          
        } else {
          // Muestra un mensaje de error específico
          console.log('contraseña repetida');
          alert("Email ya utilizado");
        }
      });
    } else {
      // Formulario inválido, puedes agregar lógica adicional si es necesario
    }
  }
}




