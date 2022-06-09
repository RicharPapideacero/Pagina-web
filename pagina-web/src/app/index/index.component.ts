import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



export interface productos{
  idProducto:          number;
  NombreProducto:      string;
  FotoProducto:        string;
  DescripcionProducto: string;
  CantidadExistenciaP: number;
  DireccionProducto:   string;
  CantidadCompraP:     number;
  CategoriaProducto:   string;
}

