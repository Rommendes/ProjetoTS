export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    latido() {
        throw new Error('implements aceita qtas implementações eu achar necessário.');
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    ehIgual(negociacoes) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}
