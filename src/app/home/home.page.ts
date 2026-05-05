import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone:false
})
export class HomePage {
  nombre:string = "Natalio"

  usuarios: any = [
    {nombre: "Natalio",
      edad: 11
    },
    {nombre: "Quixian",
      edad: 80
    },
    {nombre: "Julián",
      edad: 33
    },
    {nombre: "Fran",
      edad: 14
    },
    {nombre: "Indalecia",
      edad: 69
    },
    {nombre: "Cahlos",
      edad: 2
    }

  ]

  constructor() {}
  procesaPropagar(evento:string){
    alert("gola" + evento)
  }
}
