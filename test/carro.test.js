const Carro = require('../src/carro')

describe('Carro', () => {
  it('should drive', () => {
    const carro = new Carro('VW', 'Gol', 2020)
    carro.dirigir(100)
    expect(carro.kilometragem).toBe(100)
  })

  it('should not allow negative distance', () => {
    const carro = new Carro('VW', 'Gol', 2020)
    expect(() => carro.dirigir(-10)).toThrow()
  })

  it('should return info', () => {
    const carro = new Carro('VW', 'Gol', 2020)
    expect(carro.obterInfo()).toContain('VW')
  })
})