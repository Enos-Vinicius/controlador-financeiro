import { BaseRecursoModel } from '../models/base-recurso.model';
import { Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

export abstract class BaseRecursoService<T extends BaseRecursoModel> {
    protected http: HttpClient

    constructor(
        protected apiPath: string,
        protected injector: Injector
    ) {
        this.http = injector.get(HttpClient);
     }

    getAll(): Observable<T[]> {
        return this.http.get(this.apiPath).pipe(
            catchError(this.handleError),
            map(this.jsonDataToRecursos)
        )
    }

    getById(id: number): Observable<T>{
        const url = `${this.apiPath}/${id}`;

        return this.http.get(url).pipe(
            catchError(this.handleError),
            map(this.jsonDataToRecurso)
        )
    }

    create(recurso: T): Observable<T> {
        return this.http.post(this.apiPath, recurso).pipe(
            catchError(this.handleError),
            map(this.jsonDataToRecurso)
        )
    }

    update(recurso: T): Observable<T> {
        const url = `${this.apiPath}/${recurso.id}`;
        return this.http.put(url, recurso).pipe(
            catchError(this.handleError),
            map(() => recurso)
        )
    }

    delete(id: number): Observable<any>{
        const url = `${this.apiPath}/${id}`;
        return this.http.delete(url).pipe(
            catchError(this.handleError),
            map(() => null)
        )
    }
  

  //PROTECTED METHODS

  protected jsonDataToRecursos(jsonData: any[]): T[] {
    const recursos: T[] = [];
    jsonData.forEach(element => recursos.push(element as T));
    return recursos;
  }

  protected jsonDataToRecurso(jsonData: any): T{
    return jsonData as T;
  }

  protected handleError(error: any): Observable<any>{
    console.log("ERROR NA REQUISIÇÃO => ", error);
    return throwError(error);
  }
}