import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../services/http/http.service';


@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  @Output() closePopup = new EventEmitter();
  @Output() loginSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();


  showPassword: boolean = false;

  //DATOS DE LOGIN
  loginData = {
    Email: '',
    Contrasenas: ''
  };

  constructor(private http:HttpClient,private httpOptions:HttpService) { }


  ngOnInit(): void {
  }
  ngAfterViewInit() {
    
  }

  //EVENTO QUE SE EJECUTA AL PULSAR EL BOTÓN DE INICIAR SESIÓN
  onSubmit() {
    this.http.post<any>('https://localhost:7227/Usuarios/Login', this.loginData, this.httpOptions.httpOptions)
      .subscribe(response => {

        //SI LA RESPUESTA ES CORRECTA SE ALMACENA EL USUARIO Y SU ID EN EL SESSION STORAGE
        if (response.logeado) {
          sessionStorage.setItem('usuario', JSON.stringify(this.loginData.Email));
          sessionStorage.setItem('id', response.id);
          //SI EL USUARIO ES ADMINISTRADOR
          if (response.rol === 1) {
            // Redireccionar a la página de administrador
            window.location.href = 'https://localhost:7227/';
          //SI EL USUARIO ES CLIENTE
          }else{
            document.location.reload();
          }
        } else {
          // Inicio de sesión fallido
          alert("Usuario o contraseña incorrectos");
          
        }
      }, error => {
       
      });
  
    //CERRAR EL POPUP
    this.closePopup.emit();
  }
  
  //CAMBIAR VISIBILIDAD DE CONTRASEÑA

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  
}
