import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TarefaService } from 'src/app/core/tarefa.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visualizar-tarefa',
  templateUrl: './visualizar-tarefa.component.html'
})
export class VisualizarTarefaComponent implements OnInit {

  formTarefa: FormGroup;

  constructor(private fb: FormBuilder, private tarefaService: TarefaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.formTarefa = new FormGroup({
      tarefaid: this.fb.control(''),
      titulo: this.fb.control(''),
      descricao: this.fb.control(''),
      datacadastro: this.fb.control(''),
      dataconclusao: this.fb.control(''),
      concluida: this.fb.control(''),
      usuarioid: this.fb.control('')
    });

    this.tarefaService.getById(this.route.snapshot.params['id'])
      .subscribe((tarefa) => {
        this.formTarefa.patchValue(tarefa, { onlySelf: true });
        this.formTarefa.controls['concluida'].setValue(tarefa.concluida === true ? 'Sim' : 'Não');
        this.formTarefa.controls['dataconclusao'].setValue(tarefa.dataconclusao ? tarefa.dataconclusao : '-');
        this.formTarefa.disable();
      })
  }

}
