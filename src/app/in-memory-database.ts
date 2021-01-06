import { InMemoryDbService } from "angular-in-memory-web-api";
import { Categoria } from './paginas/categorias/shared/categoria.model';

export class InMemoryDataBase implements InMemoryDbService {
    createDb(){
        const categorias: Categoria[] = [
            {id: 1, nome: "Moradia", descricao: "Pagamento de Contas da Casa"},
            {id: 2, nome: "Saúde", descricao: "Plano de Saúde e remédois"},
            {id: 3, nome: "Salário", descricao: "Recebimento de Salário"},
            {id: 4, nome: "Lazer", descricao: "Cinema, Parques, praia, etc"},
            {id: 5, nome: "Freelas", descricao: "Trabalhos com freelancer"}
        ]
        return { categorias }
    }
    
}