import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';

/**SERVICE */
import { GuiasService } from '../../service/guias.service';

/**ANGULAR MATERIAL */
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

/**COMPONENTS */
import { AddGuiaComponent } from '../add-guia/add-guia.component';
import { GuiaListReq } from '../../model';

@Component({
  selector: 'app-list-guia',
  templateUrl: './list-guia.component.html',
  styleUrls: ['./list-guia.component.scss'],
})
export class ListGuiaComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  /**INICIALICE */
  GuiaList: any;
  dataSource = new MatTableDataSource<any>();

  displayedColumns: string[] = [
    'id',
    'fecha_emision',
    'punto_partida_direccion',
    'punto_llegada_direccion',
  ];

  constructor(private _GuiaService: GuiasService, public dialog: MatDialog) {}

  /**LIFE COMPONENT */
  ngOnInit(): void {
    this.ServiceGetGuiaList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**SERVICE */
  ServiceGetGuiaList() {
    return this._GuiaService
      .getGuiaList()
      .subscribe(
        (response) => (
          (this.GuiaList = response),
          (this.dataSource.data = this.GuiaList),
          console.log(this.GuiaList)
        )
      );
  }

  /**ANGULAR MATERIAL */
  //Dialog
  openDialog() {
    const dialogRef = this.dialog.open(AddGuiaComponent, {
      height: 'auto',
      width: '90%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  //Filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
