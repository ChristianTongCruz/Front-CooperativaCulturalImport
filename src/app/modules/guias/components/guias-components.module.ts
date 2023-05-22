import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**HTTP CLIENT */
import { HttpClientModule } from '@angular/common/http';

/**ANGULAR MATERIAL */
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

/**COMPONENTS */
import { AddGuiaComponent } from './add-guia/add-guia.component';
import { ListGuiaComponent } from './list-guia/list-guia.component';

@NgModule({
  declarations: [
    /**COMPONENTS */
    AddGuiaComponent,
    ListGuiaComponent,
  ],
  imports: [
    CommonModule,
    /**HTTP CLIENT */
    HttpClientModule,
    /**ANGULAR MATERIAL */
    AngularMaterialModule,
  ],
  exports: [
    /**COMPONENTS */
    AddGuiaComponent,
    ListGuiaComponent,
  ],
})
export class GuiasComponentsModule {}