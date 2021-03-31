import { Injectable, Injector } from '@angular/core';

import { Categoria } from "./categoria.model";
import { BaseRecursoService } from "../../../shared/services/base-recurso.service";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BaseRecursoService<Categoria> {

  constructor(protected injector: Injector) { 
    super("api/categorias", injector, Categoria.fromJson);  
  }

}
