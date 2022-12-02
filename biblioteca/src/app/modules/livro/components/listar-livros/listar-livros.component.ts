import { LivroService } from './../../../services/livro.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-livros',
  templateUrl: './listar-livros.component.html',
  styleUrls: ['./listar-livros.component.css']
})
export class ListarLivrosComponent implements OnInit {
  @Input() listaDeLivros: any;

  books:any;

  livros = [
    'nome',
    'quantidadedePaginas',
    'geenro',
    'autor',
    'editora'
  ];

  constructor(private livroService: LivroService) { }

  ngOnInit(): void {
    this.livroService.getLivros().subscribe((res)=> {
      this.books = res.livros;
      console.log(res);
    });
  }

}
