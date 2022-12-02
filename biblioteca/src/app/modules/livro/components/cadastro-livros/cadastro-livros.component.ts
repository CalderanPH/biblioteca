import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-livros',
  templateUrl: './cadastro-livros.component.html',
  styleUrls: ['./cadastro-livros.component.css'],
})
export class CadastroLivrosComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  livros = {
    nome: '',
    quantidadePaginas: '',
    genero: '',
    autor: '',
    editora: '',
  };

  @Output() listaDeLivros = [this.livros];

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      nome: ['', Validators.required],
      quantidadePaginas: ['', Validators.required],
      genero: ['', Validators.required],
      autor: ['', Validators.required],
      editora: ['', Validators.required],
    });
  }

  onSubmit() {
    const livro = this.registerForm.value;

    localStorage.setItem("livro", livro);

    window.alert("Cadastro realizado com sucesso!");
  }
}
