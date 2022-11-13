import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cadastro-livros',
  templateUrl: './cadastro-livros.component.html',
  styleUrls: ['./cadastro-livros.component.css'],
})
export class CadastroLivrosComponent implements OnInit {
  livros = {
    nome: '',
    quantidadePaginas: '',
    genero: '',
    autor: '',
    editora: '',
  };

  @Output() listaDeLivros = [this.livros];

  constructor() {}

  ngOnInit(): void {}
}
