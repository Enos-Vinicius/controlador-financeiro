import { BaseRecursoModel } from '../../../shared/models/base-recurso.model';

export class Categoria extends BaseRecursoModel {
    constructor(
        public id?: number, 
        public nome?: string,
        public descricao?: string
    ){
        super();
    }

    static fromJson(jsonData: any): Categoria{ 
        return Object.assign(new Categoria(), jsonData);
    }
}