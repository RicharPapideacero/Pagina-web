import { Component, OnInit } from '@angular/core';
import { productos } from '../index/index.component';
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
  Autocarga:boolean=false;
  produc: productos[]=[]

  autosave(){
   this.buscar();
   this.Autocarga=true;
  }
  buscar() {
    
    this.HttpServ.obtenerinfo()
      .subscribe({
        next: (productos) => {
          this.hayerror = false;
          console.log(productos);
          this.produc=productos;
        
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
