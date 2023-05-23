import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**ROUTING */
import { GuiasRoutingModule } from './guias.routes';

/**HTTP CLIENT MODULE */
import { HttpClientModule } from '@angular/common/http';

/**COMPONENTS MODULO */
import { GuiasComponentsModule } from './components/guias-components.module';

/**COMPONENTS */
import { GuiasLayoutComponent } from './layout/guias-layout/guias-layout.component';
import { GuiasPagesComponent } from './pages/guias-pages/guias-pages.component';

@NgModule({
  declarations: [
    /**COMPONENTS */
    GuiasLayoutComponent,
    GuiasPagesComponent,
  ],
  imports: [
    CommonModule,
    /**HTTP CLIENT MODULE */
    HttpClientModule,
    /**ROUTING */
    GuiasRoutingModule,
    /**COMPONENTS MODULO */
    GuiasComponentsModule,
  ],
  exports: [
    /**COMPONENTS */
    GuiasLayoutComponent,
    GuiasPagesComponent,
  ],
})
export class GuiasModule {}
