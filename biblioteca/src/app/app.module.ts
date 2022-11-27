import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CadastroLivrosComponent } from './cadastro-livros/cadastro-livros.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './account/authentication/authentication.component';
import { ListarLivrosComponent } from './listar-livros/listar-livros.component';
import { LoginComponent } from './account/login/login.component';
import { CadastroUsuarioComponent } from './account/create-account/cadastro-usuario.component';
import { AuthGuard } from './account/guards';
import {
  JwtInterceptor,
  ErrorInterceptor,
  fakeBackendProvider,
} from './account/helpers';
import {
  AlertService,
  AuthenticationService,
  UserService,
} from './account/services';

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
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
