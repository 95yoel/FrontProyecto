import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-contenido-viaje',
  templateUrl: './contenido-viaje.component.html',
  styleUrls: ['./contenido-viaje.component.scss']
})
export class ContenidoViajeComponent implements OnInit {

  contenido:any;
  loaded:boolean = false;
  env = environment;

  params :{id: number;} | undefined;

  datosReserva = {
    Email: '',
    viaje:0,
    numPersonas:'',
    precio:'',
    id:''
  };


  textoMostrar:string ="";
  tituloCategoria:string ="";
  idViaje:any;
  numViajeros:number =0;
  precioActualizado:string ="";
  precioViaje:string ="";
  constructor(private rutaActiva: ActivatedRoute,private http:HttpClient,private httpOptions:HttpService) { }

  salir(){
    window.history.back();
  }

  ngOnInit(): void {

    this.params = {
      id: this.rutaActiva.snapshot.params['parametro']
    }
    this.rutaActiva.params.subscribe((params: Params) => {
      this.params = {
        id: params['parametro']
      }

      this.idViaje = this.params.id.toString();


      this.http.get(`${this.env.BACKEND_VIAJES_URL}/Viajes/GetViajeById/${this.idViaje}`).subscribe((data: any) => {
        if (Array.isArray(data)) {
          this.contenido = data.map((viaje: any) => {
            const fechaLlegada = new Date(viaje.fechaLlegada);
            const fechaSalida = new Date(viaje.fechaSalida);
            viaje.fechaLlegada = fechaLlegada.toLocaleString();
            viaje.fechaSalida = fechaSalida.toLocaleString();
            viaje.precio = Math.round(viaje.precio * 100) / 100; //redondeo a 2 decimales
            viaje.precio = viaje.precio.toString().replace('.', ','); //cambio el punto por la coma
            this.precioActualizado = viaje.precio;
            this.precioViaje = viaje.precio;
            return viaje;
          });
      
          console.log(this.contenido);
          this.loaded = true;
        } else {
          console.log("No hay datos");
        }
      });
    });
  }

  actualizarPrecio() {
    const precio = parseFloat(this.precioViaje.replace(',', '.')); 
  
    if (this.numViajeros && !isNaN(precio)) {
      this.precioActualizado= (precio * this.numViajeros).toFixed(2).replace('.', ',');
    }
  }
  reservarViaje(){

    var usuario = sessionStorage.getItem('usuario');
    if(usuario == null){
      alert("Debes iniciar sesion para poder reservar");
      return;
    }else{
      this.datosReserva.id = sessionStorage.getItem('id') ?? '';
      this.datosReserva.Email = usuario;
      this.datosReserva.viaje = this.idViaje;
      this.datosReserva.numPersonas = this.numViajeros.toString();
      this.datosReserva.precio = this.precioActualizado;
      console.log(this.datosReserva);
      alert("Viaje reservado con exito");
      window.location.href = "http://localhost:4200/explora";
      
        this.http.post<any>(`${this.env.BACKEND_VIAJES_URL}/Reservas/Crear`, this.datosReserva, this.httpOptions.httpOptions)
        .subscribe(response => {
          if (response) {
            // Inicio de sesión exitoso
            // Almacena los datos del usuario en el session storage
            alert("Reserva realizada con exito");
          } else {
            alert("No se ha podido realizar la reserva");
            // Inicio de sesión fallido
            // Manejo de errores
          }
        }, error => {
          // Manejo de errores
        });
     }
    }

  }


