// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  setRole(role: string) {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router) { }

  logout() {
    // Aquí se pueden limpiar tokens, cerrar sesión, etc.
    this.router.navigate(['/']); // Redirigir al inicio de sesión u otra página
  }
}
