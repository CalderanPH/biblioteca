import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { UserService, AlertService } from '../services';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css'],
})
export class CadastroUsuarioComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      age: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.registerForm.controls; }

async onSubmit() {
  this.submitted = true;

  if (this.registerForm.invalid) {
    return;
  }

  await this.userService
    .register(this.registerForm.value)
    .pipe(first())
    .subscribe(
      (data) => {
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/login']);
      },
      (error) => {
        this.alertService.error(error);
      }
    );
}

}
