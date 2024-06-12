import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  loginForm: FormGroup;
  registroForm: any;
  router: any;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(10)]],
      contraseña: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log('Formulario válido', this.registroForm.value);
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
}
