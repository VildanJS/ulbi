import reverse from './reverse'

describe('reverse', () => {
  test('reverse', () => {
    expect(reverse('hello')).toEqual('olleh')
    expect(reverse('')).toEqual('')
  })
})
