import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saluda',
  templateUrl: './saluda.component.html',
  styleUrls: ['./saluda.component.scss'],
  imports: [FormsModule]
})
export class SaludaComponent  implements OnInit {



  texto: string ="";
  @Input('nombre') nombre:string|undefined;

  @Output() propagar = new EventEmitter<string>();

  propagarhold: string = "Propagar";
  mensaje: string ="";

  constructor() { 
  }

  ngOnInit() {
    this.texto = "Hola " + this.nombre
  }
  onPropagar(){
    this.propagar.emit(this.mensaje)

  }

}
