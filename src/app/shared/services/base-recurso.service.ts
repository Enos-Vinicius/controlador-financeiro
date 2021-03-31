import { BaseRecursoModel } from '../models/base-recurso.model';
import { Injector } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";

export abstract class BaseRecursoService<T extends BaseRecursoModel> {
    protected http: HttpClient

    constructor(
        protected apiPath: string,
        protected injector: Injector,
        protected jsonDataToResourceFn: (jsonData: any) => T
    ) {
        this.http = injector.get(HttpClient);
     }

    getAll(): Observable<T[]> {
        return this.http.get(this.apiPath).pipe(
            map(this.jsonDataToRecursos.bind(this)),
            catchError(this.handleError)
        )
    }

    getById(id: number): Observable<T>{
        const url = `${this.apiPath}/${id}`;

        return this.http.get(url).pipe(
            map(this.jsonDataToRecurso.bind(this)),
            catchError(this.handleError)
        )
    }

    create(recurso: T): Observable<T> {
        return this.http.post(this.apiPath, recurso).pipe(
            map(this.jsonDataToRecurso.bind(this)),
            catchError(this.handleError)
        )
    }

    update(recurso: T): Observable<T> {
        const url = `${this.apiPath}/${recurso.id}`;
        return this.http.put(url, recurso).pipe(
            map(() => recurso),
            catchError(this.handleError)
        )
    }

    delete(id: number): Observable<any>{
        const url = `${this.apiPath}/${id}`;
        return this.http.delete(url).pipe(
            map(() => null),
            catchError(this.handleError)
        )
    }
  

  //PROTECTED METHODS

  protected jsonDataToRecursos(jsonData: any[]): T[] {
    const recursos: T[] = [];
    jsonData.forEach(
        element => recursos.push(this.jsonDataToResourceFn(element) )
    );
    return recursos;
  }

  protected jsonDataToRecurso(jsonData: any): T{
    return this.jsonDataToResourceFn(jsonData);
  }

  protected handleError(error: any): Observable<any>{
    console.log("ERROR NA REQUISIÇÃO => ", error);
    return throwError(error);
  }
}