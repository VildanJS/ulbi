import { FC } from 'react'
import { CounterSchema } from '../model/types'
import { Button } from 'shared/ui/Button'
import { useDispatch, useSelector } from 'react-redux'
import { incremented, decremented } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {

  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)

  const increment = () => {
    dispatch(incremented())
  }

  const decrement = () => {
    dispatch(decremented())
  }

  return (
    <>
      <div data-testid={'value-title'}>
        {counterValue}
      </div>
      <Button data-testid={'increment-button'} onClick={increment}>increment</Button>
      <Button data-testid={'decrement-button'} onClick={decrement}>decrement</Button>
    </>
  )
}
