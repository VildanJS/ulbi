import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithOptions } from '@/shared/utils/tests/renderWithOptions'

import { Counter } from './Counter'


describe('counter', () => {
  test('increment', async () => {
    renderWithOptions(
      <Counter />, {
        initialState: {
          counter: { value: 10 }
        }
      })
    await userEvent.click(screen.getByTestId('increment-button'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('15')
  })
  test('decrement', async () => {
    renderWithOptions(
      <Counter />, {
        initialState: {
          counter: { value: 10 }
        }
      })
    await userEvent.click(screen.getByTestId('decrement-button'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})
