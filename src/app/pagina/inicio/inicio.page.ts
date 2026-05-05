import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: false
})
export class InicioPage implements OnInit {

  edad : string = "33";
  texto : string = "";

  constructor() { }

  ngOnInit() {
  }

  gestionarNigger(mensaje : string){
    this.texto = mensaje
  }

}
