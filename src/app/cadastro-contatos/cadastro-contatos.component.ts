import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-contatos',
  templateUrl: './cadastro-contatos.component.html',
  styleUrls: ['./cadastro-contatos.component.scss']
})
export class CadastroContatosComponent {
  formularioContato: FormGroup;
  contatos: { nome: string, telefone: string }[] = [];
  nome: string = '';
  telefone: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.formularioContato = this.formBuilder.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }

  adicionarContato() {
    if (this.formularioContato.valid) {
      const contato = this.formularioContato.value;
      this.contatos.push(contato);
      this.formularioContato.reset();
    }
  }
}
