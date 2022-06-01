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



export interface producto{
  idproducto: number;
  Direccionproducto: String;
  Nombreproducto: String;
  Descripcionproducto:String;
  CantidadExistenciap: number;
  CantidadCompra: number;
  Categoriaproducto:String;
  Precio:number;
}

