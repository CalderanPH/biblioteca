import { httpInterceptorProviders } from './http-interceptors/index';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { CadastroUsuarioComponent } from './account/create-account/cadastro-usuario.component';
import { RodapeComponent } from './rodape/rodape.component';
import { LoginComponent } from './account/login/login.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CadastroLivrosComponent,
    CadastroUsuarioComponent,
    RodapeComponent,
    LoginComponent,
    HomeComponent,
    AuthenticationComponent,
    ListarLivrosComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
