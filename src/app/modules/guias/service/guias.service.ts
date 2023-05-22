import { Injectable } from '@angular/core';

/**HTTP CLIENT */
import { HttpClient } from '@angular/common/http';

/**ENVIROMENTS */
import { environment } from 'src/app/environments/environment';

/**MODEL */
import {
  DestinatarioListRes,
  GuiaListRes,
  GuiaTransportistaRes,
  TipoVehiculoListRes,
  TransportistaListRes,
  VehiculosListRes,
} from '../model/index';

/**RXJS */
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GuiasService {
  constructor(protected _httpClient: HttpClient) {}

  /** TIPO VEHICULO*/
  public getTipoVehiculo() {
    return this._httpClient.get(`${environment.urlBase}/guias/tipo-vehiculo/`);
  }

  public getTipoVehiculoById(id: number) {
    return this._httpClient.get(
      `${environment.urlBase}/guias/tipo-vehiculo/${id}`
    );
  }

  public postTipoVehiculo(TipoVehiculoListRes: TipoVehiculoListRes) {
    return this._httpClient.post(
      `${environment.urlBase}/guias/tipo-vehiculo/`,
      TipoVehiculoListRes
    );
  }

  /**VEHICULO  LIST*/
  public getVehiculoList() {
    return this._httpClient.get(`${environment.urlBase}/guias/vehiculo/`);
  }

  public getVehiculoListById(id: number) {
    return this._httpClient.get(`${environment.urlBase}/guias/vehiculo/${id}`);
  }

  public postVehiculoList(VehiculosListRes: VehiculosListRes) {
    return this._httpClient.post(
      `${environment.urlBase}/guias/vehiculo/`,
      VehiculosListRes
    );
  }

  /**TRANSPORTISTA  LIST*/
  public getTransportistaList() {
    return this._httpClient.get(`${environment.urlBase}/guias/transportista/`);
  }

  public getTransportistaListById(id: number) {
    return this._httpClient.get(
      `${environment.urlBase}/guias/transportista/${id}`
    );
  }

  public postTransportistaList(TransportistaListRes: TransportistaListRes) {
    return this._httpClient.post(
      `${environment.urlBase}/guias/transportista/`,
      TransportistaListRes
    );
  }

  /**DESTINATARIO  LIST*/
  public getDestinatarioList() {
    return this._httpClient.get(`${environment.urlBase}/guias/destinatario/`);
  }

  public getDestinatarioListById(id: number) {
    return this._httpClient.get(
      `${environment.urlBase}/guias/destinatario/${id}`
    );
  }

  public postDestinatarioList(DestinatarioListRes: DestinatarioListRes) {
    return this._httpClient.post(
      `${environment.urlBase}/guias/destinatario/`,
      DestinatarioListRes
    );
  }

  /**GUIA TRANSPORTISTA LIST*/
  public getGuiaTransportistaList() {
    return this._httpClient.get(
      `${environment.urlBase}/guias/guia-transportista/`
    );
  }

  public getGuiaTransportistaListById(id: number) {
    return this._httpClient.get(
      `${environment.urlBase}/guias/guia-transportista/${id}`
    );
  }

  public postGuiaTransportistaList(GuiaTransportistaRes: GuiaTransportistaRes) {
    return this._httpClient.post(
      `${environment.urlBase}/guias/guia-transportista/`,
      GuiaTransportistaRes
    );
  }

  /**GUIA LIST*/
  public getGuiaList(): Observable<any> {
    return this._httpClient.get(`${environment.urlBase}/guias/guia/`);
  }

  public getGuiaListById(id: number) {
    return this._httpClient.get(`${environment.urlBase}/guias/guia/${id}`);
  }

  public postGuiaList(GuiaListRes: GuiaListRes) {
    return this._httpClient.post(
      `${environment.urlBase}/guias/guia/`,
      GuiaListRes
    );
  }
}
