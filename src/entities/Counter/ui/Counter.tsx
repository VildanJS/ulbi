import { AppButton } from '@/shared/ui/redesigned/AppButton'

import { useCounterValue } from '../../Counter/model/selectors/getCounterValue/getCounterValue'
import { useBindCounterActions } from '../../Counter/model/slice/counterSlice'


export const Counter = () => {

  const counterValue = useCounterValue()
  const { incrementedOnFive, decremented } = useBindCounterActions()

  const increment = () => {
    incrementedOnFive(5)
  }

  const decrement = () => {
    decremented()
  }

  return (
    <>
      <div data-testid={'value-title'}>
        {counterValue}
      </div>

      <AppButton
        data-testid={'increment-button'}
        variant='outline'
        onPress={increment}
      >Increment by 5
      </AppButton>

      <AppButton
        data-testid={'decrement-button'}
        variant='outline'
        onPress={decrement}
      >Decrement
      </AppButton>
    </>
  )
}
