const list = require('../list')

describe('list product', () => {
  test('product should contain listed products', () => {
    const product1 = { image: 'bag', price: '50', Description: 'this is a bag' }
    const actualOutput = list(product1)
    const expectedOutput = product1
    expect(actualOutput).toContain(expectedOutput)
  })
})
