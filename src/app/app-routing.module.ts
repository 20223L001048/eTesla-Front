import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './componentes/bienvenida/bienvenida.component';
import { AdminLoginComponent } from './componentes/admin-login/admin-login.component';
import { VentasLoginComponent } from './componentes/ventas-login/ventas-login.component';
import { AdminRegistroComponent } from './componentes/admin-registro/admin-registro.component';
import { VentasRegistroComponent } from './componentes/ventas-registro/ventas-registro.component';
import { PanelAdminComponent } from './componentes/panel-admin/panel-admin.component';
import { PanelVentasComponent } from './componentes/panel-ventas/panel-ventas.component';

const routes: Routes = [
  { path: '', component: BienvenidaComponent }, 
  { path: 'AdminLogin', component: AdminLoginComponent },
  { path: 'VentasLogin', component: VentasLoginComponent},
  { path: 'AdminRegistro', component: AdminRegistroComponent},
  { path: 'VentasRegistro', component: VentasRegistroComponent},
  { path: 'PanelAdmin', component: PanelAdminComponent},
  { path: 'PanelVentas', component: PanelVentasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
