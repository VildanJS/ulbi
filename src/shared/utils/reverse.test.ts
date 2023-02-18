import reverse from 'shared/utils/reverse'

describe('reverse', () => {
  test('reverse', () => {
    expect(reverse('hello')).toEqual('olleh')
    expect(reverse('')).toEqual('')
  })
})
