import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core-private-layout',
  templateUrl: './core-private-layout.component.html',
  styleUrls: ['./core-private-layout.component.scss'],
})
export class CorePrivateLayoutComponent {
  constructor(private _Router: Router) {}

  /**RUTAS */
  public goToDashboard(): void {
    this._Router.navigate(['/']);
  }

  public goToPersona(): void {
    this._Router.navigate(['personas']);
  }

  public goToVentas(): void {
    this._Router.navigate(['ventas']);
  }

  public goToInventario(): void {
    this._Router.navigate(['inventario']);
  }

  public goToFacturas(): void {
    this._Router.navigate(['facturas']);
  }

  public goToGuias(): void {
    this._Router.navigate(['guias']);
  }
}
