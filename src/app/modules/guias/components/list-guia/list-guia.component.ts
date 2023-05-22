import { Component, OnInit } from '@angular/core';
import { GuiasService } from '../../service/guias.service';

@Component({
  selector: 'app-list-guia',
  templateUrl: './list-guia.component.html',
  styleUrls: ['./list-guia.component.scss'],
})
export class ListGuiaComponent implements OnInit {
  constructor(private _GuiaService: GuiasService) {}

  ngOnInit(): void {
    console.log('ListGuiaComponent');
  }
}
