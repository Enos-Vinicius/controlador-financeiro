import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LancamentoRoutingModule } from './lancamento-routing.module';
import { LancamentoListaComponent } from './lancamento-lista/lancamento-lista.component';

@NgModule({
  declarations: [
    LancamentoListaComponent
  ],
  imports: [
    CommonModule,
    LancamentoRoutingModule
  ]
})
export class LancamentosModule { }
