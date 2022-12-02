import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroLivrosComponent } from './components/cadastro-livros/cadastro-livros.component';
import { ListarLivrosComponent } from './components/listar-livros/listar-livros.component';

const routes: Routes = [
  { path: 'cadastro-livro', component: CadastroLivrosComponent },
  { path: 'listar-livros', component: ListarLivrosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivroRoutingModule {}
