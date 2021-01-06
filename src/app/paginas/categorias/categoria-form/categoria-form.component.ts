import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { Categoria } from "../shared/categoria.model";
import { CategoriaService } from "../shared/categoria.service";

import { switchMap } from "rxjs/operators";

import Toaster from "toastr";

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.css']
})
export class CategoriaFormComponent implements OnInit, AfterContentChecked {

  currentAction: string;
  categoriaForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;
  categoria: Categoria = new Categoria();

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.setCurrentAction();
    this.buildCategoriaForm();
    this.loadCategoria();
  }

  ngAfterContentChecked(){
    this.setPageTitle();
  }

  private setCurrentAction(){
    if(this.route.snapshot.url[0].path == "new"){
      this.currentAction = "new"
    } else {
      this.currentAction = "edit"
    }
    
  }

  private buildCategoriaForm(){
    this.categoriaForm = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(2)]],
      descricao: [null]
    })
  }

  private loadCategoria(){
    if(this.currentAction == "edit"){
      this.route.paramMap.pipe(
        switchMap(paramns => this.categoriaService.getById(+paramns.get("id")))
      )
      .subscribe(
        (categoria) => {
          this.categoria = categoria;
          this.categoriaForm.patchValue(categoria);
        },
        (error) => alert('Ocorreu um erro no servidor.')
      )
    } else {

    }
  }

  private setPageTitle(){
    if(this.currentAction == 'new')
      this.pageTitle = 'Cadastro de Nova Categoria'
    else {
      const categoriaNome = this.categoria.nome || '';
      this.pageTitle = 'Editando Categoria: ' + categoriaNome;
    }
  }

}
