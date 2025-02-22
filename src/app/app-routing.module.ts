import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { AdminLoginComponent } from './componentes/admin-login/admin-login.component';
import { VentasLoginComponent } from './componentes/ventas-login/ventas-login.component';
import { AdminRegistroComponent } from './componentes/admin-registro/admin-registro.component';
import { VentasRegistroComponent } from './componentes/ventas-registro/ventas-registro.component';
import { PanelAdminComponent } from './componentes/panel-admin/panel-admin.component';
import { PanelVentasComponent } from './componentes/panel-ventas/panel-ventas.component';
import { ActualizarDatosComponent } from './componentes/actualizar-datos/actualizar-datos.component';
import { AprobarCotizacionComponent } from './componentes/aprobar-cotizacion/aprobar-cotizacion.component';
import { CrearCotizacionComponent } from './componentes/crear-cotizacion/crear-cotizacion.component';
import { EliminarCotizacionComponent } from './componentes/eliminar-cotizacion/eliminar-cotizacion.component';
import { GenerarReportesComponent } from './componentes/generar-reportes/generar-reportes.component';
import { GestionarProductosComponent } from './componentes/gestionar-productos/gestionar-productos.component';
import { GestionarUsuariosComponent } from './componentes/gestionar-usuarios/gestionar-usuarios.component';
import { ReporteVentasComponent } from './componentes/reporte-ventas/reporte-ventas.component';
import { VerHistorialComponent } from './componentes/ver-historial/ver-historial.component';
import { LayoutComponent } from './componentes/layout/layout.component';
import { DetalleComercioComponent } from './componentes/detalle-comercio/detalle-comercio.component';
import { DetalleResidenciaComponent } from './componentes/detalle-residencia/detalle-residencia.component';
import { DetalleIndustriaComponent } from './componentes/detalle-industria/detalle-industria.component';
import { DetalleReporteComponent } from './componentes/detalle-reporte/detalle-reporte.component';
import { DetalleUsuarioComponent } from './componentes/detalle-usuario/detalle-usuario.component';
import { DetalleClienteComponent } from './componentes/detalle-cliente/detalle-cliente.component';
import { VistaCotizacionComponent } from './componentes/vista-cotizacion/vista-cotizacion.component';

const routes: Routes = [
  { path: '', component: BienvenidaComponent }, 
  { path: 'AdminLogin', component: AdminLoginComponent },
  { path: 'VentasLogin', component: VentasLoginComponent},
  { path: 'AdminRegistro', component: AdminRegistroComponent},
  { path: 'VentasRegistro', component: VentasRegistroComponent},
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'PanelAdmin', component: PanelAdminComponent },
      { path: 'PanelVentas', component: PanelVentasComponent },
      { path: 'ActualizarDatos', component: ActualizarDatosComponent },
      { path: 'AprobarCotizacion', component: AprobarCotizacionComponent },
      { path: 'CrearCotizacion', component: CrearCotizacionComponent },
      { path: 'EliminarCotizacion', component: EliminarCotizacionComponent },
      { path: 'GenerarReportes', component: GenerarReportesComponent },
      { path: 'GestionarProductos', component: GestionarProductosComponent },
      { path: 'GestionarUsuarios', component: GestionarUsuariosComponent },
      { path: 'ReporteVentas', component: ReporteVentasComponent },
      { path: 'VerHistorial', component: VerHistorialComponent },
      { path: 'DetalleComerio', component: DetalleComercioComponent},
      { path: 'DetalleResidencia', component: DetalleResidenciaComponent},
      { path: 'DetalleIndustria', component: DetalleIndustriaComponent},
      { path: 'DetalleReporte', component: DetalleReporteComponent},
      { path: 'detalleUsuario', component: DetalleUsuarioComponent},
      { path: 'detalleCliente', component: DetalleClienteComponent},
      { path: 'vistaCotizacion', component: VistaCotizacionComponent}
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
