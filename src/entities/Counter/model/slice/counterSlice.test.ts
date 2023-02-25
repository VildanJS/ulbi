import { counterReducer, counterActions } from './counterSlice'
import { CounterSchema } from '../types'

describe('counterSlice.test', () => {
  const counter: CounterSchema = {
    value: 10
  }

  test('increment', () => {
    expect(counterReducer(counter as CounterSchema, counterActions.incremented())).toEqual({ value: 11 })
  })
  test('decrement', () => {
    expect(counterReducer(counter as CounterSchema, counterActions.decremented())).toEqual({ value: 9})
  })
  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.incremented())).toEqual({ value: 1})
  })
})
