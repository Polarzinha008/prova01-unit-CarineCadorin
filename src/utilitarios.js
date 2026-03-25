module.exports = {
  inverterString(str) {
    return str.split('').reverse().join('')
  },

  contarCaracteres(str) {
    return str.length
  },

  paraMaiusculas(str) {
    return str.toUpperCase()
  },

  somar(a, b) {
    return a + b
  },

  dividir(a, b) {
    if (b === 0) throw new Error()
    return a / b
  },

  ehPar(num) {
    return num % 2 === 0
  },

  primeiroElemento(arr) {
    return arr[0]
  },

  mediaArray(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length
  },

  ehPalindromo(str) {
    const invertida = str.split('').reverse().join('')
    return str === invertida
  }
}