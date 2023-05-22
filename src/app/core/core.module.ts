import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**ROUTING */
import { CoreRoutingModule } from './core.routing';

/**COMPONENTS */
import { CorePrivateLayoutComponent } from './layout/core-private-layout/core-private-layout.component';
import { CorePublicLayoutComponent } from './layout/core-public-layout/core-public-layout.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [
    /**COMPONENTS */
    CorePrivateLayoutComponent,
    CorePublicLayoutComponent,
  ],
  imports: [
    CommonModule,
    /**ROUTING */
    CoreRoutingModule,
    /**ANGULAR MATERIAL */
    AngularMaterialModule,
  ],
  exports: [
    /**COMPONENTS */
    CorePrivateLayoutComponent,
    CorePublicLayoutComponent,
  ],
})
export class CoreModule {}
