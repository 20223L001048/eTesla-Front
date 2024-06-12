import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-registro',
  templateUrl: './admin-registro.component.html',
  styleUrls: ['./admin-registro.component.css']
})
export class AdminRegistroComponent {
  registroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('^\\w+([.-]?\\w+)*@etesla\\.mx$')]], 
      contraseña: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]], 
      sucursal: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.registroForm.valid) {
      console.log('Formulario válido', this.registroForm.value);
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
