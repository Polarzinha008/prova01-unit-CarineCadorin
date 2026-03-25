const ListaDeCompras = require('../src/lista')

describe('ListaDeCompras', () => {
  let lista

  beforeEach(() => {
    lista = new ListaDeCompras()
  })

  it('should add item', () => {
    lista.adicionarItem('Arroz')
    expect(lista.obterItens()).toContain('Arroz')
  })

  it('should remove item', () => {
    lista.adicionarItem('Arroz')
    lista.removerItem('Arroz')
    expect(lista.obterItens()).not.toContain('Arroz')
  })

  it('should throw when removing invalid item', () => {
    expect(() => lista.removerItem('Feijão')).toThrow()
  })
})