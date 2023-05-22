import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**COMPONENTS */
import { FacturasLayoutComponent } from './layout/facturas-layout/facturas-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FacturasLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacturasRoutingModule {}
