import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { AdminLoginComponent } from './componentes/admin-login/admin-login.component';
import { VentasLoginComponent } from './componentes/ventas-login/ventas-login.component';
import { VentasRegistroComponent } from './componentes/ventas-registro/ventas-registro.component';
import { AdminRegistroComponent } from './componentes/admin-registro/admin-registro.component';
import { PanelAdminComponent } from './componentes/panel-admin/panel-admin.component';
import { PanelVentasComponent } from './componentes/panel-ventas/panel-ventas.component';


@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    AdminLoginComponent,
    VentasLoginComponent,
    VentasRegistroComponent,
    AdminRegistroComponent,
    PanelAdminComponent,
    PanelVentasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
