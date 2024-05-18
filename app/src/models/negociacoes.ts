
import { Modelo } from '../interfaces/modelo.js';
import { Negociacao } from './negociacao.js';

//EXEMPLO DE IMPLEMENTAÇÃO
interface Cachorro{
    latido():void
}
export class Negociacoes implements Cachorro, Modelo<Negociacoes> {
    
    latido(): void {
        //EXEMPLO DE IMPLENTAÇÃO
        throw new Error('implements aceita qtas implementações eu achar necessário.');
    }
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
    public paraTexto(): string{
        return JSON.stringify(this.negociacoes, null, 2);
    }
    public ehIgual(negociacoes: Negociacoes): boolean {
           return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
        }
    }

