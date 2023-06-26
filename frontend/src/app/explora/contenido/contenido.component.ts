import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';




@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {


  destinos:any;
  destacados:any;
  i :number =4;
  env = environment;
  loaded:boolean = false;

  constructor(private http:HttpClient) { }

    ngOnInit(): void {
      
      this.http.get(`${this.env.BACKEND_VIAJES_URL}/destino/GetJson`).subscribe((data: any) => {
        this.destinos = data.map((viaje: any) => {

          viaje.precio = Math.round(viaje.precio * 100) / 100;
          viaje.precio = viaje.precio.toString().replace('.', ','); 
          return viaje;

        });
        
        this.loaded = true;
        
      });
      
    }

    ngAfterViewInit() {
      
    }

}
