import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorePrivateLayoutComponent } from './layout/core-private-layout/core-private-layout.component';

const routes: Routes = [
  {
    path: '',
    component: CorePrivateLayoutComponent,
  },
  {
    path: 'personas',
    component: CorePrivateLayoutComponent,
  },

  {
    path: 'ventas',
    component: CorePrivateLayoutComponent,
  },
  {
    path: 'inventario',
    component: CorePrivateLayoutComponent,
  },
  {
    path: 'facturas',
    component: CorePrivateLayoutComponent,
    loadChildren: () =>
      import('../modules/facturas/facturas.module').then(
        (m) => m.FacturasModule
      ),
  },
  {
    path: 'guias',
    component: CorePrivateLayoutComponent,
    loadChildren: () =>
      import('../modules/guias/guias.module').then((m) => m.GuiasModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
