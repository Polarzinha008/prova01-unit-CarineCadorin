const Banco = require('../src/banco')

describe('Banco', () => {
  let banco

  beforeEach(() => {
    banco = new Banco('Teste', 100)
  })

  it('should deposit', () => {
    banco.depositar(50)
    expect(banco.obterSaldo()).toBe(150)
  })

  it('should not deposit negative value', () => {
    expect(() => banco.depositar(-10)).toThrow()
  })

  it('should withdraw', () => {
    banco.sacar(50)
    expect(banco.obterSaldo()).toBe(50)
  })

  it('should not withdraw more than balance', () => {
    expect(() => banco.sacar(200)).toThrow()
  })

  it('should transfer', () => {
    const destino = new Banco('Destino', 0)
    banco.transferir(50, destino)
    expect(destino.obterSaldo()).toBe(50)
  })

  it('should not transfer invalid value', () => {
    const destino = new Banco('Destino', 0)
    expect(() => banco.transferir(-10, destino)).toThrow()
  })

  it('should apply interest', () => {
    banco.aplicarJuros(10)
    expect(banco.obterSaldo()).toBe(110)
  })
})