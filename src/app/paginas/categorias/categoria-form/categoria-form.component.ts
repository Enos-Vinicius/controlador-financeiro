import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

import { Categoria } from "../shared/categoria.model";
import { CategoriaService } from "../shared/categoria.service";

import { switchMap } from "rxjs/operators";

import toaster from "toastr";

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

  submitForm(){
    this.submittingForm = true;
    
    if(this.currentAction == 'new'){
      this.createCategoria();
    } else {
      this.updateCategoria();
    }
  }

  private createCategoria(){
    const categoria: Categoria = Object.assign(new Categoria(), this.categoriaForm.value);
    this.categoriaService.create(categoria).subscribe(
      categoria => this.actionsForSuccess(categoria),
      error => this.actionsForError(error) 
    )
  }

  private updateCategoria(){
    const categoria: Categoria = Object.assign(new Categoria(), this.categoriaForm.value);

    this.categoriaService.update(categoria).subscribe(
      categoria => this.actionsForSuccess(categoria),
      error => this.actionsForError(error) 
    )
  }

  private actionsForSuccess(categoria: Categoria){
    toaster.success("Solicitação processada com sucesso!");
    this.router.navigateByUrl('categorias', {skipLocationChange: true}).then(
      () => this.router.navigate(['categorias', categoria.id, 'edit'])
    )
  }

  private actionsForError(error){
    toaster.error("Ocorreu um erro ao processar a sua solicitação!")
    this.submittingForm = false;
    if(error.status === 422){
      this.serverErrorMessages = JSON.parse(error._body).errors;
    } else {
      this.serverErrorMessages = ["Falha na comunicação com o servidor. Por favor tente mais tarde."]
    }
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
