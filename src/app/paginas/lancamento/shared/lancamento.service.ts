import { Injectable, Injector } from '@angular/core';

import { Lancamento } from "./lancamento.model";
import { CategoriaService } from "../../categorias/shared/categoria.service";
import { BaseRecursoService } from "../../../shared/services/base-recurso.service";
import { Observable } from "rxjs";
import { flatMap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class LancamentoService extends BaseRecursoService<Lancamento> {


  constructor(
    protected injector: Injector,
    private categoriaService: CategoriaService,
  ) { 
    super("api/lancamentos", injector);
  }


  create(lancamento: Lancamento): Observable<Lancamento> {
    return this.categoriaService.getById(lancamento.categoriaId).pipe(
      flatMap(categoria => {
        lancamento.categoria = categoria;
       
        return super.create(lancamento);
      })
    )
  }

  update(lancamento: Lancamento): Observable<Lancamento> {
    return this.categoriaService.getById(lancamento.categoriaId).pipe(
      flatMap(categoria => {
        lancamento.categoria = categoria;
        return super.update(lancamento);
      })
    )
  }


  //PRIVATE METHODS

  protected jsonDataToLancamentos(jsonData: any[]): Lancamento[] {
    const lancamentos: Lancamento[] = [];
    jsonData.forEach(element => {
      const lancamento = Object.assign(new Lancamento(), element);
      lancamentos.push(lancamento);
    });
    return lancamentos;
  }

  protected jsonDataToLancamento(jsonData: any): Lancamento{
    return Object.assign(new Lancamento(), jsonData);
  }

}
