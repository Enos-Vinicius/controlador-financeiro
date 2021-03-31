import { Categoria } from "../../categorias/shared/categoria.model";
import { BaseRecursoModel } from '../../../shared/models/base-recurso.model';
export class Lancamento extends BaseRecursoModel {
    constructor(
        public id?: number,
        public nome?: string,
        public descricao?: string,
        public tipo?: string,
        public valor?: string,
        public data?: string,
        public paga?: boolean,
        public categoriaId?: number,
        public categoria?: Categoria,

    ){
        super();
    }
    
    static tipos = {
        despesa: 'Despesa',
        receita: 'Receita'
    }

    static fromJson(jsonData: any): Lancamento{ 
        return Object.assign(new Lancamento(), jsonData);
    }

    get pagaText(): string {
        return this.paga ? 'Pago' : 'Pendente';
    }
}