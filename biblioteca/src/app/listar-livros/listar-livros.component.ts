import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {
  @Input() listaDeLivros: any;

  constructor() { }

  ngOnInit(): void {
  }

}
