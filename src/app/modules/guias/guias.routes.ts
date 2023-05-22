import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**COMPONENTS */
import { GuiasLayoutComponent } from './layout/guias-layout/guias-layout.component';

const routes: Routes = [
  {
    path: 'info',
    component: GuiasLayoutComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuiasRoutingModule {}
