import { Component, OnInit } from '@angular/core';
import { Categoria } from "../shared/categoria.model";
import { CategoriaService } from "../shared/categoria.service";
@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css']
})
export class CategoriaListaComponent implements OnInit {

  public categorias: Categoria[] = [];

  constructor(
    private categoriaService: CategoriaService
  ) { }

  ngOnInit() {
    this.categoriaService.getAll().subscribe(
      categorias => this.categorias = categorias,
      error => alert('Erro ao carregar a lista!')
    )
  }

  deleteCategoria(categoria){
    const mustDelete = confirm('Deseja realmente excluir este item?');

    if(mustDelete){
      this.categoriaService.delete(categoria.id).subscribe(
        () => this.categorias = this.categorias.filter(element => element != categoria),
        error => alert('Erro ao tentar excluir')
      )
    }
  }

}
