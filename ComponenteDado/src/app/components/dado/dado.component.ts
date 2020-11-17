import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {
  valor: number;                          //Guarda un aleatorio
  constructor() { }

  ngOnInit() {
    this.valor = Math.trunc(Math.random() * 6) + 1;
  }


}
