import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import { Counter } from './Counter'
import { renderWithOptions } from 'shared/utils/tests/renderWithOptions'

describe('counter', () => {
  test('increment', () => {
    renderWithOptions(
      <Counter/>, {
        initialState: {
          counter: { value: 10 }
        }
      })
    userEvent.click(screen.getByTestId('increment-button'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('11')
  })

  test('decrement', () => {
    renderWithOptions(
      <Counter/>, {
        initialState: {
          counter: { value: 10 }
        }
      })
    userEvent.click(screen.getByTestId('decrement-button'))
    expect(screen.getByTestId('value-title')).toHaveTextContent('9')
  })
})
