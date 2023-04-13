import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';




@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.scss']
})
export class ContenidoComponent implements OnInit {

  destinos:any;
  env = environment;


  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.http.get(`${this.env.BACKEND_VIAJES_URL}/destino/GetJson`).subscribe((data:any)=>{
      this.destinos = data;
    })

  }

  
}
