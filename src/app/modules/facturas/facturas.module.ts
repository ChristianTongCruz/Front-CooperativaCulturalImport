import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**ROUTING */
import { FacturasRoutingModule } from './facturas.routes';

/**COMPONENTS */
import { FacturasLayoutComponent } from './layout/facturas-layout/facturas-layout.component';
import { FacturasPagesComponent } from './pages/facturas-pages/facturas-pages.component';

@NgModule({
  declarations: [
    /**COMPONENTS */
    FacturasLayoutComponent,
    FacturasPagesComponent,
  ],
  imports: [
    CommonModule,
    /**ROUTING */
    FacturasRoutingModule,
  ],
  exports: [
    /**COMPONENTS */
    FacturasLayoutComponent,
    FacturasPagesComponent,
  ],
})
export class FacturasModule {}
