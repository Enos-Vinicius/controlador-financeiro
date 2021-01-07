import { Component, OnInit } from '@angular/core';
import { Lancamento } from "../shared/lancamento.model";
import { LancamentoService } from "../shared/lancamento.service";
@Component({
  selector: 'app-lancamento-lista',
  templateUrl: './lancamento-lista.component.html',
  styleUrls: ['./lancamento-lista.component.css']
})
export class LancamentoListaComponent implements OnInit {

  public lancamentos: Lancamento[] = [];

  constructor(
    private categoriaService: LancamentoService
  ) { }

  ngOnInit() {
    this.categoriaService.getAll().subscribe(
      lancamentos => this.lancamentos = lancamentos,
      error => alert('Erro ao carregar a lista!')
    )
  }

  deleteLancamento(lancamento){
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if(mustDelete){
      this.categoriaService.delete(lancamento.id).subscribe(
        () => this.lancamentos = this.lancamentos.filter(element => element != lancamento),
        error => alert('Erro ao tentar excluir')
      )
    }
  }

}
