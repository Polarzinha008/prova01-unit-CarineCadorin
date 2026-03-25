class Banco {
  constructor(nome, saldo = 0) {
    this.nome = nome
    this.saldo = saldo
  }

  depositar(valor) {
    if (valor <= 0) throw new Error()
    this.saldo += valor
  }

  sacar(valor) {
    if (valor <= 0 || valor > this.saldo) throw new Error()
    this.saldo -= valor
  }

  transferir(valor, destino) {
    if (valor <= 0 || valor > this.saldo) throw new Error()
    this.saldo -= valor
    destino.depositar(valor)
  }

  aplicarJuros(percentual) {
    if (percentual < 0) throw new Error()
    this.saldo += this.saldo * (percentual / 100)
  }

  obterSaldo() {
    return this.saldo
  }
}

module.exports = Banco