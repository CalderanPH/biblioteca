import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biblioteca';

  valorAtual: string = '';

  botaoClicado(){
    alert("Deseja criar uma nova conta?")
  }

  onkeyUP(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }
}
