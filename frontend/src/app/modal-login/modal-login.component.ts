import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  @Output() closePopup = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // Aquí se puede agregar la lógica para procesar el formulario de inicio de sesión
    // Una vez procesado, se puede cerrar el pop-up emitiendo el evento closePopup
    this.closePopup.emit();
  }

  

  

}
