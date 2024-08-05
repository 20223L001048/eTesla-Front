import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(10)]],
      branch: ['', Validators.required],
      contraseña: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]],
      rememberMe: [false]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Formulario válido', this.loginForm.value);
      this.router.navigate(['/PanelAdmin']);
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

  validateDomain(control: any) {
    const email = control.value;
    if (email && email.indexOf('@') != -1) {
      const [_, domain] = email.split('@');
      if (domain !== 'vendedor.mx') {
        return { domain: true };
      }
    }
    return null;
  }
}
