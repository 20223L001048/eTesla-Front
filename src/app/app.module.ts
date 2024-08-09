import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service.ts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { AdminLoginComponent } from './componentes/admin-login/admin-login.component';
import { VentasLoginComponent } from './componentes/ventas-login/ventas-login.component';
import { VentasRegistroComponent } from './componentes/ventas-registro/ventas-registro.component';
import { AdminRegistroComponent } from './componentes/admin-registro/admin-registro.component';
import { PanelAdminComponent } from './componentes/panel-admin/panel-admin.component';
import { PanelVentasComponent } from './componentes/panel-ventas/panel-ventas.component';
import { CrearCotizacionComponent } from './componentes/crear-cotizacion/crear-cotizacion.component';
import { ActualizarDatosComponent } from './componentes/actualizar-datos/actualizar-datos.component';
import { VerHistorialComponent } from './componentes/ver-historial/ver-historial.component';
import { GestionarProductosComponent } from './componentes/gestionar-productos/gestionar-productos.component';
import { GenerarReportesComponent } from './componentes/generar-reportes/generar-reportes.component';
import { AprobarCotizacionComponent } from './componentes/aprobar-cotizacion/aprobar-cotizacion.component';
import { EliminarCotizacionComponent } from './componentes/eliminar-cotizacion/eliminar-cotizacion.component';
import { GestionarUsuariosComponent } from './componentes/gestionar-usuarios/gestionar-usuarios.component';
import { ReporteVentasComponent } from './componentes/reporte-ventas/reporte-ventas.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LayoutComponent } from './componentes/layout/layout.component';
import { DetalleResidenciaComponent } from './componentes/detalle-residencia/detalle-residencia.component';
import { DetalleComercioComponent } from './componentes/detalle-comercio/detalle-comercio.component';
import { DetalleIndustriaComponent } from './componentes/detalle-industria/detalle-industria.component';
import { DetalleReporteComponent } from './componentes/detalle-reporte/detalle-reporte.component';
import { DetalleUsuarioComponent } from './componentes/detalle-usuario/detalle-usuario.component';
import { DetalleClienteComponent } from './componentes/detalle-cliente/detalle-cliente.component';
import { VistaCotizacionComponent } from './componentes/vista-cotizacion/vista-cotizacion.component';



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
    CrearCotizacionComponent,
    ActualizarDatosComponent,
    VerHistorialComponent,
    GestionarProductosComponent,
    GenerarReportesComponent,
    AprobarCotizacionComponent,
    EliminarCotizacionComponent,
    GestionarUsuariosComponent,
    ReporteVentasComponent,
    HeaderComponent,
    LayoutComponent,
    DetalleResidenciaComponent,
    DetalleComercioComponent,
    DetalleIndustriaComponent,
    DetalleReporteComponent,
    DetalleUsuarioComponent,
    DetalleClienteComponent,
    VistaCotizacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
