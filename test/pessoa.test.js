const Pessoa = require('../src/pessoa')

describe('Pessoa', () => {
  it('should present', () => {
    const pessoa = new Pessoa('João', 20)
    expect(pessoa.apresentar()).toContain('João')
  })

  it('should update age', () => {
    const pessoa = new Pessoa('João', 20)
    pessoa.atualizarIdade(30)
    expect(pessoa.idade).toBe(30)
  })

  it('should not allow negative age', () => {
    const pessoa = new Pessoa('João', 20)
    expect(() => pessoa.atualizarIdade(-5)).toThrow()
  })
})