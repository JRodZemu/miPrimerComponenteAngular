import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ficha',
  templateUrl: './ficha.component.html',
  styleUrls: ['./ficha.component.scss'],
  imports: [FormsModule]
})
export class FichaComponent  implements OnInit {
//Esto en caso de recibirlo desde dentro y no desde fuera.
  @Input ('edad') edad:string|undefined;
  textoNombre: string ="";
  textoApellidos: string="";
  textoEdad: string = "";

  @Output() nigger = new EventEmitter<string>();
  enviarhold: string ="enviar";


  constructor() { 
  }

  ngOnInit() {

  }
  onPropagar(){
    this.nigger.emit("Nombre: " + this.textoNombre + " Edad: " + this.textoApellidos + "  Años: " + this.textoEdad)
  }

}
