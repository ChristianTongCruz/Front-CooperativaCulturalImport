import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

/**FORMS */
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

/**SERVICE */
import { GuiasService } from '../../service/guias.service';
import { DniRucService } from 'src/app/shared/service/DniRuc.service';

@Component({
  selector: 'app-add-guia',
  templateUrl: './add-guia.component.html',
  styleUrls: ['./add-guia.component.scss'],
})
export class AddGuiaComponent implements OnInit {
  constructor(
    /**FORMS */
    private _FormBuilder: FormBuilder,
    /**SERVICE */
    private _GuiasService: GuiasService,
    private _DniRucService: DniRucService
  ) {}

  /**INICIALICE */

  DNI: any = {};
  FullName?: string;

  /**LIFE COMPONENT */

  ngOnInit() {}

  /**FORMS GROUPS*/

  FormGuiaList = this._FormBuilder.group({
    operacion: [''],
    peso_bruto_total: [''],
    peso_bruto_unidad_medida: [''],
    punto_partida_direccion: [''],
    codigo_partida_establecimiento_sunat: [''],
    punto_llegada_direccion: [''],
    codigo_llegada_establecimiento_sunat: [''],
    observaciones: [''],
    enviar_cliente: [''],
    formato_pdf: [''],
    tipo_comprobante: [''],
    destinatario: [''],
    cliente: [''],
    placa: [''],
    punto_partida: [''],
    punto_llegada: [''],
  });

  FormDatosVehiculo = this._FormBuilder.group({
    placa: [''],
    marca: [''],
    modelo: [''],
    year: [''],
    color: [''],
    tipo: [''],
  });

  FormDatosTransportista = this._FormBuilder.group({
    numero_documento: [''],
    nombre: ['', Validators.required],
    tipo_documento: [''],
  });

  FormDatosDestinatario = this._FormBuilder.group({
    numero_documento: [''],
    nombre: [''],
    tipo_documento: [''],
  });

  /**FORMS METHODS */

  get FormDatosTransportista_numero_documento() {
    return this.FormDatosTransportista.get('numero_documento') as FormControl;
  }

  /**METHODS */

  mostrarDNI(dni: any) {
    return this._DniRucService.getDni(dni).subscribe((response) => {
      this.DNI = response;
      this.FullName = `${this.DNI.nombres} ${this.DNI.apellidoPaterno} ${this.DNI.apellidoMaterno}`;
      console.log(this.DNI);
    });
  }

  consultarDNI() {
    const dni = this.FormDatosTransportista_numero_documento.value;
    this.mostrarDNI(dni);
  }

  proces() {
    console.log(this.FormDatosTransportista_numero_documento.value);
  }
}
