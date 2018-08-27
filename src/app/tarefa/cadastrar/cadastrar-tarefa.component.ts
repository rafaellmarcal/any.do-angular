import { Component, OnInit } from '@angular/core';
import { TarefaService } from 'src/app/core/tarefa.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Tarefa } from 'src/app/model/tarefa.model';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { UsuarioService } from 'src/app/core/usuario.service';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html'
})
export class CadastrarTarefaComponent implements OnInit {

  formTarefa: FormGroup;

  constructor(private fb: FormBuilder, private tarefaService: TarefaService, private router: Router, private datePipe: DatePipe, private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.formTarefa = new FormGroup({
      titulo: this.fb.control('', [Validators.required]),
      descricao: this.fb.control('', [Validators.required])
    });
  }

  cadastrar(tarefa: Tarefa) {
    tarefa.datacadastro = this.datePipe.transform(Date.now(), 'dd-MM-yyyy HH:mm:ss');
    tarefa.usuarioid = this.usuarioService.userLogged().usuarioid;
    this.tarefaService.post(tarefa)
      .subscribe(() => this.router.navigate(['/tarefas']));
  }
}
