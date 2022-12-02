import { NavigationModule } from './../navigation/navigation.module';
import { LivroRoutingModule } from './livro-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CadastroLivrosComponent } from './components/cadastro-livros/cadastro-livros.component';
import { ListarLivrosComponent } from './components/listar-livros/listar-livros.component';

@NgModule({
  declarations: [CadastroLivrosComponent, ListarLivrosComponent],
  providers: [],
  bootstrap: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LivroRoutingModule,
    HttpClientModule,
    NavigationModule
  ],
})
export class LivroModule {}
