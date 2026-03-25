const ContaBancaria = require('../src/contaBancaria')

const criarConta = () => ({
  id: "001",
  titular: "Ugioni",
  saldo: 1000,
  status: "ativa",
  limite: 5000,
  criadaEm: new Date(),
  atualizadaEm: new Date()
})

test("Obter saldo", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.obterSaldo()).toStrictEqual(1000)
})

test("Obter titular", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.obterTitular()).toStrictEqual("Ugioni")
})

test("Obter status", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.obterStatus()).toStrictEqual("ativa")
})

test("Conta está ativa", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.estaAtiva()).toStrictEqual(true)
})

test("Obter limite", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.obterLimite()).toStrictEqual(5000)
})

test("Depositar valor válido", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.depositar(500)).toStrictEqual(true)
})

test("Depositar valor inválido", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.depositar(0)).toStrictEqual(false)
})

test("Depositar valor negativo", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.depositar(-10)).toStrictEqual(false)
})

test("Sacar valor válido", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.sacar(500)).toStrictEqual(true)
})

test("Sacar valor inválido maior que saldo", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.sacar(100000)).toStrictEqual(false)
})

test("Sacar valor zero", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.sacar(0)).toStrictEqual(false)
})

test("Alterar titular válido", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.alterarTitular("Novo")).toStrictEqual(true)
})

test("Alterar titular inválido", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.alterarTitular("")).toStrictEqual(false)
})

test("Bloquear conta", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.bloquearConta()).toStrictEqual(true)
})

test("Bloquear conta já bloqueada", () => {
  const c = criarConta()
  c.status = "bloqueada"
  const conta = new ContaBancaria(c)
  expect(conta.bloquearConta()).toStrictEqual(false)
})

test("Ativar conta", () => {
  const c = criarConta()
  c.status = "bloqueada"
  const conta = new ContaBancaria(c)
  expect(conta.ativarConta()).toStrictEqual(true)
})

test("Ativar conta já ativa", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.ativarConta()).toStrictEqual(false)
})

test("Encerrar conta com saldo zero", () => {
  const c = criarConta()
  c.saldo = 0
  const conta = new ContaBancaria(c)
  expect(conta.encerrarConta()).toStrictEqual(true)
})

test("Encerrar conta com saldo diferente de zero", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.encerrarConta()).toStrictEqual(false)
})

test("Pode sacar valor válido", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.podeSacar(100)).toStrictEqual(true)
})

test("Pode sacar valor inválido", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.podeSacar(100000)).toStrictEqual(false)
})

test("Aplicar tarifa válida", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.aplicarTarifa(100)).toStrictEqual(true)
})

test("Aplicar tarifa inválida", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.aplicarTarifa(0)).toStrictEqual(false)
})

test("Ajustar limite válido", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.ajustarLimite(2000)).toStrictEqual(true)
})

test("Ajustar limite inválido", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.ajustarLimite(-1)).toStrictEqual(false)
})

test("Saldo negativo", () => {
  const c = criarConta()
  c.saldo = -10
  const conta = new ContaBancaria(c)
  expect(conta.saldoNegativo()).toStrictEqual(true)
})

test("Transferir valor válido", () => {
  const origem = new ContaBancaria(criarConta())
  const destino = new ContaBancaria(criarConta())
  expect(origem.transferir(100, destino)).toStrictEqual(true)
})

test("Transferir valor inválido", () => {
  const origem = new ContaBancaria(criarConta())
  const destino = new ContaBancaria(criarConta())
  expect(origem.transferir(999999, destino)).toStrictEqual(false)
})

test("Calcular saldo disponível", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.calcularSaldoDisponivel()).toStrictEqual(6000)
})

test("Gerar resumo", () => {
  const conta = new ContaBancaria(criarConta())
  const resumo = conta.gerarResumo()
  expect(resumo.titular).toStrictEqual("Ugioni")
  expect(resumo.disponivel).toStrictEqual(6000)
})

test("Validar conta válida", () => {
  const conta = new ContaBancaria(criarConta())
  expect(conta.validarConta()).toStrictEqual(true)
})

test("Validar conta sem id", () => {
  const c = criarConta()
  delete c.id
  const conta = new ContaBancaria(c)
  expect(conta.validarConta()).toStrictEqual(false)
})

test("Validar conta sem titular", () => {
  const c = criarConta()
  c.titular = ""
  const conta = new ContaBancaria(c)
  expect(conta.validarConta()).toStrictEqual(false)
})

test("Validar conta com saldo inválido", () => {
  const c = criarConta()
  c.saldo = "abc"
  const conta = new ContaBancaria(c)
  expect(conta.validarConta()).toStrictEqual(false)
})

test("Validar conta com limite negativo", () => {
  const c = criarConta()
  c.limite = -1
  const conta = new ContaBancaria(c)
  expect(conta.validarConta()).toStrictEqual(false)
})

test("Validar conta com status inválido", () => {
  const c = criarConta()
  c.status = "erro"
  const conta = new ContaBancaria(c)
  expect(conta.validarConta()).toStrictEqual(false)
})

test("Validar conta com status bloqueada", () => {
  const c = criarConta()
  c.status = "bloqueada"
  const conta = new ContaBancaria(c)
  expect(conta.validarConta()).toStrictEqual(true)
})

test("Validar conta com status encerrada", () => {
  const c = criarConta()
  c.status = "encerrada"
  const conta = new ContaBancaria(c)
  expect(conta.validarConta()).toStrictEqual(true)
})

test("Validar conta passando por todos os ifs", () => {
  const conta = new ContaBancaria({
    id: "999",
    titular: "Completo",
    saldo: 100,
    limite: 50,
    status: "ativa",
    criadaEm: new Date(),
    atualizadaEm: new Date()
  })
  expect(conta.validarConta()).toStrictEqual(true)
})

test("Validar conta com status undefined", () => {
  const c = criarConta()
  delete c.status
  const conta = new ContaBancaria(c)
  expect(conta.validarConta()).toStrictEqual(false)
})

test("Resetar conta", () => {
  const conta = new ContaBancaria(criarConta())
  conta.resetarConta()
  expect(conta.obterSaldo()).toStrictEqual(0)
  expect(conta.obterLimite()).toStrictEqual(0)
  expect(conta.obterStatus()).toStrictEqual("ativa")
})