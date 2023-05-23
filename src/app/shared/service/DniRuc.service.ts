import { Injectable } from '@angular/core';

/**HTTP CLIENT */
import { HttpClient } from '@angular/common/http';

/**RXJS */
import { Observable } from 'rxjs';

/**ENVIROMENTS */
import { DniRucEnvironment } from 'src/app/environments/DniRuc.enviroments';

@Injectable({
  providedIn: 'root',
})
export class DniRucService {
  constructor(private _HttpClient: HttpClient) {}

  public getDni(Dni: number): Observable<any> {
    return this._HttpClient.get(
      `${DniRucEnvironment.urlDni}${Dni}${DniRucEnvironment.token}}`
    );
  }

  public getRuc(Ruc: number): Observable<any> {
    return this._HttpClient.get(
      `${DniRucEnvironment.urlRuc}${Ruc}${DniRucEnvironment.token}}`
    );
  }
}
