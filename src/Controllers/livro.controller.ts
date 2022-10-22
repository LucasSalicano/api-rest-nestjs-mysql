import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import {Livro} from "../Models/livro.model";
import {LivroService} from "../Services/livro.service";

@Controller('livros')
export class LivroController {

    constructor(private livroService: LivroService) {
    }

    @Get('/')
    async obterTodos(): Promise<Livro[]> {
        return this.livroService.obterTodos();
    }

    @Get('/:id')
    async obterUm(@Param() params): Promise<Livro> {
        return this.livroService.obterUm(params.id);
    }

    @Post()
    async criar(@Body() produto) {
        return this.livroService.criar(produto);
    }

    @Put()
    async atualizar(@Body() produtoAtualizado): Promise<[number]> {
        return this.livroService.alterar(produtoAtualizado);
    }

    @Delete('/:id')
    async deletar(@Param() params) {
        return this.livroService.deletar(params.id);
    }
}