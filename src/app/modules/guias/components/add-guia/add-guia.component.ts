import { Component, OnInit } from '@angular/core';

/**FORMS */
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    private _GuiasService: GuiasService,
    private _DniRucService: DniRucService
  ) {}

  /**INICIALICE */

  name = new FormControl('');

  disableSelect = new FormControl(false);

  ngOnInit() {
    return this._DniRucService
      .getDni(70102288)
      .subscribe((response) => console.log(response));
  }
}
