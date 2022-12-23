import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { FacturacionComponent } from './facturacion/facturacion.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {
        path: '', component: InicioComponent
      },
      {
        path: 'habitaciones', component: HabitacionesComponent
      },
      {
        path: 'reportes', component: ReportesComponent
      },
      {
        path: 'reservas', component: ReservasComponent
      },
      {
        path: 'servicios', component: ServiciosComponent
      },
      {
        path: 'usuarios', component: UsuariosComponent
      },
      {
        path: 'facturacion', component: FacturacionComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
