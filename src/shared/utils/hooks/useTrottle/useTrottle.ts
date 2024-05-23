/* eslint-disable @typescript-eslint/no-explicit-any*/
import { useCallback, useRef } from 'react'

export const useThrottle = (
  callback: (...args: any[]) => void,
  delay: number,
) => {
  const throttleRef = useRef(true)

  return useCallback(
    (...args: any[]) => {
      if (throttleRef.current) {
        callback(...args)
        throttleRef.current = false
        setTimeout(() => {
          throttleRef.current = true
        }, delay)
      }
    },
    [callback, delay],
  )
}
