import { AuthGuard } from './account/guards/auth.guard';
import { LoginComponent } from './account/login/login.component';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './account/create-account/cadastro-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: '', component: CadastroLivrosComponent }],
    canActivate: [AuthGuard],
  },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro-usuario', component: CadastroUsuarioComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
