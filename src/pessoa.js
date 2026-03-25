class Pessoa {
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }

  apresentar() {
    return `Olá, meu nome é ${this.nome}`
  }

  atualizarIdade(novaIdade) {
    if (novaIdade < 0) throw new Error()
    this.idade = novaIdade
  }
}

module.exports = Pessoa