import { InMemoryDbService } from "angular-in-memory-web-api";

import { Categoria } from './paginas/categorias/shared/categoria.model';
import { Lancamento } from './paginas/lancamento/shared/lancamento.model';

export class InMemoryDataBase implements InMemoryDbService {
    createDb(){
        const categorias: Categoria[] = [
            {id: 1, nome: "Moradia", descricao: "Pagamento de Contas da Casa"},
            {id: 2, nome: "Saúde", descricao: "Plano de Saúde e remédios"},
            {id: 3, nome: "Salário", descricao: "Recebimento de Salário"},
            {id: 4, nome: "Lazer", descricao: "Cinema, Parques, praia, etc"},
            {id: 5, nome: "Freelas", descricao: "Trabalhos com freelancer"}
        ]

        const lancamentos: Lancamento[] = [
            { id: 1, nome: 'Gás de Cozinha', categoriaId: categorias[0].id, categoria: categorias[0], paga: true, data: "14/10/2018", valor: "70,80", tipo: "despesa", descricao: "Qualquer descrição para essa despesa" } as Lancamento,
            { id: 2, nome: 'Suplementos', categoriaId: categorias[1].id, categoria: categorias[1], paga: false, data: "14/10/2018", valor: "15,00", tipo: "despesa" } as Lancamento,
            { id: 3, nome: 'Salário na Empresa X', categoriaId: categorias[3].id, categoria: categorias[3], paga: true, data: "15/10/2018", valor: "4405,49", tipo: "receita" } as Lancamento,
            { id: 4, nome: 'Aluguel de Filme', categoriaId: categorias[2].id, categoria: categorias[2], paga: true, data: "16/10/2018", valor: "15,00", tipo: "despesa" } as Lancamento,
            { id: 5, nome: 'Suplementos', categoriaId: categorias[1].id, categoria: categorias[1], paga: true, data: "17/10/2018", valor: "30,00", tipo: "despesa" } as Lancamento,
            { id: 6, nome: 'Video Game da Filha', categoriaId: categorias[2].id, categoria: categorias[2], paga: false, data: "17/10/2018", valor: "15,00", tipo: "despesa" } as Lancamento,
            { id: 11, nome: 'Uber', categoriaId: categorias[1].id, categoria: categorias[1], paga: true, data: "17/10/2018", valor: "30,00", tipo: "despesa" } as Lancamento,
            { id: 12, nome: 'Aluguel', categoriaId: categorias[2].id, categoria: categorias[2], paga: false, data: "23/10/2018", valor: "15,00", tipo: "despesa" } as Lancamento,
            { id: 13, nome: 'Gás de Cozinha', categoriaId: categorias[1].id, categoria: categorias[1], paga: false, data: "25/10/2018", valor: "30,00", tipo: "despesa" } as Lancamento,
            { id: 14, nome: 'Pagamento Pelo Projeto XYZ', categoriaId: categorias[4].id, categoria: categorias[4], paga: true, data: "25/10/2018", valor: "2980,00", tipo: "receita" } as Lancamento,
            { id: 19, nome: 'Aluguel de Filme', categoriaId: categorias[2].id, categoria: categorias[2], paga: false, data: "07/11/2018", valor: "15,00", tipo: "despesa" } as Lancamento,
            { id: 21, nome: 'Video Game da Filha', categoriaId: categorias[1].id, categoria: categorias[1], paga: true, data: "17/11/2018", valor: "30,00", tipo: "despesa" } as Lancamento,
            { id: 22, nome: 'Cinema', categoriaId: categorias[2].id, categoria: categorias[2], paga: true, data: "18/11/2018", valor: "15,00", tipo: "despesa" } as Lancamento,
            { id: 23, nome: 'Jiu Jitsu', categoriaId: categorias[1].id, categoria: categorias[1], paga: false, data: "21/11/2018", valor: "130,00", tipo: "despesa" } as Lancamento,
            { id: 44, nome: 'Uber', categoriaId: categorias[2].id, categoria: categorias[2], paga: true, data: "28/11/2018", valor: "15,00", tipo: "despesa" } as Lancamento,
            { id: 55, nome: 'Cinema', categoriaId: categorias[1].id, categoria: categorias[1], paga: false, data: "28/11/2018", valor: "30,00", tipo: "despesa" }  as Lancamento
        ]
        return { categorias,  lancamentos}
    }
    
}