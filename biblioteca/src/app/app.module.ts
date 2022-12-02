import { LivroModule } from './modules/livro/livro.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './modules/navigation/cabecalho/cabecalho.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './account/authentication/authentication.component';
import { LoginComponent } from './account/login/login.component';
import { CadastroUsuarioComponent } from './account/create-account/cadastro-usuario.component';
import { AuthGuard } from './account/guards';
import {
  AlertService,
  AuthenticationService,
  UserService,
} from './account/services';
import { NavigationModule } from './modules/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent,
    CadastroUsuarioComponent,
    LoginComponent,
    HomeComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NavigationModule,
    LivroModule,
  ],
  providers: [AuthGuard, AlertService, AuthenticationService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
