import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dado-hijo',
  templateUrl: './dado-hijo.component.html',
  styleUrls: ['./dado-hijo.component.css']
})
export class DadoHijoComponent implements OnInit {
  @Input() valorAleatorio: number;        //Numero traido desde el parent
  constructor() { }

  ngOnInit(): void {
  }

}
