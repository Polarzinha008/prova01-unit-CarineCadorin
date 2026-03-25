const { obterCnh } = require('../src/cnh')

describe('CNH', () => {
  it('should validate age', () => {
    expect(obterCnh(18)).toBe(true)
  })
})