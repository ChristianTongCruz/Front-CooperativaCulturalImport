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

  DNI: any;

  /**LIFE COMPONENT */

  ngOnInit() {}

  ConsultarDni(dni: any) {
    return this._DniRucService
      .getDni(dni)
      .subscribe((response) => (response = this.DNI));
  }

  NombreDni(){

  }

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
    nombre: ['', Validators.required],
    tipo_documento: [''],
  });

  get numero_documento() {
    return this.FormDatosTransportista.get('numero_documento') as FormControl;
  }

  proces() {
    console.log('this.FormDatosTransportista.value');
  }
}
