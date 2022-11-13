import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/account.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css'],
})
export class CadastroUsuarioComponent implements OnInit {
  account = {
    nome: '',
    email: '',
    idade: '',
    password: '',
  };

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  async onSubmit() {
    try {
      const result = await this.accountService.createAccount(this.account);

      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
}
