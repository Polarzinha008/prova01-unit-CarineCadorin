const UserService = require('../src/userService')

describe('UserService', () => {
  it('should return user name', async () => {
    const repo = {
      findById: jest.fn().mockResolvedValue({ name: 'Carine' })
    }

    const service = new UserService(repo)
    const name = await service.getUserName(1)

    expect(name).toBe('Carine')
  })
})