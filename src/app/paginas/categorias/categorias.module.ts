import { NgModule } from '@angular/core';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CategoriaListaComponent, 
    CategoriaFormComponent
  ],
  imports: [
    SharedModule,
    CategoriasRoutingModule
  ]
})
export class CategoriasModule { }
