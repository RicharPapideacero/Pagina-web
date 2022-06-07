import { Component, OnInit } from '@angular/core';
import { producto } from '../index/index.component';
import { HTTPService } from './http.service';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HTTPComponent implements OnInit {

  constructor(private HttpServ: HTTPService) { }

  ngOnInit(): void {
  }

  nombreproducto: string = "";
  hayerror: boolean = false;
  produc: producto[]=[]

  buscar() {
    this.hayerror = false;
    this.HttpServ.obtenerinfo(this.nombreproducto)
      .subscribe({
        next: (resp) => {
          this.hayerror = false;
          console.log(resp[0].NombreProducto);
          this.produc = this.produc;
        },
        error: (err) => {
          console.log('Error');
          console.info(err);
          this.hayerror = true;
          this.produc = [];
        }
      }
      )
  }
}
