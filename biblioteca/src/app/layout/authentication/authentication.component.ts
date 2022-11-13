import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
binding: any;

  constructor() { }

  ngOnInit(): void {
  }

  valorAtual: string = '';

  botaoClicado(){
    alert("Deseja criar uma nova conta?")
  }

  onkeyUP(evento: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }

}
