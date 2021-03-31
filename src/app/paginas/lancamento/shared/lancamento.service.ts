import { Injectable, Injector } from '@angular/core';

import { Lancamento } from "./lancamento.model";
import { CategoriaService } from "../../categorias/shared/categoria.service";
import { BaseRecursoService } from "../../../shared/services/base-recurso.service";
import { Observable } from "rxjs";
import { catchError, flatMap } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class LancamentoService extends BaseRecursoService<Lancamento> {


  constructor(
    protected injector: Injector,
    private categoriaService: CategoriaService,
  ) { 
    super("api/lancamentos", injector, Lancamento.fromJson);
  }


  create(lancamento: Lancamento): Observable<Lancamento> {
    return this.setCategoryAndSendToServer(lancamento, super.create.bind(this));
  }

  update(lancamento: Lancamento): Observable<Lancamento> {
    return this.setCategoryAndSendToServer(lancamento, super.update.bind(this));
  }

  private setCategoryAndSendToServer(lancamento: Lancamento, sendFn: any): Observable<Lancamento>{
    return this.categoriaService.getById(lancamento.categoriaId).pipe(
      flatMap(categoria => {
        lancamento.categoria = categoria;
       
        return sendFn(lancamento);
      }),
      catchError(this.handleError)
    )
  }

}
