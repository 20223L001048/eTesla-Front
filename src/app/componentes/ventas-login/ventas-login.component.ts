import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ventas-login',
  templateUrl: './ventas-login.component.html',
  styleUrls: ['./ventas-login.component.css']
})
export class VentasLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(10)]],
      contraseña: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario válido', this.loginForm.value);
    } else {
      console.log('Formulario no válido');
    }
  }

  validateAlpha(event: KeyboardEvent) {
    const charCode = event.charCode;
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }
}
