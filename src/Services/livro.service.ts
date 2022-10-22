import {Livro} from "../Models/livro.model";
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class LivroService {
    constructor(
        @InjectModel(Livro)
        private livroModel: typeof Livro
    ) {
    }

    async obterTodos(): Promise<Livro[]> {
        return this.livroModel.findAll();
    }

    async obterUm(id: number): Promise<Livro> {
        return this.livroModel.findByPk(id);
    }

    async criar(produto: Livro) {
        return this.livroModel.create(produto);
    }

    async alterar(livro: Livro): Promise<[number]> {
        return this.livroModel.update(livro, {
            where: {
                id: livro.id
            }
        });
    }

    async deletar(id: number) {
        const livro: Livro = await this.obterUm(id);
        await livro.destroy();
    }
}