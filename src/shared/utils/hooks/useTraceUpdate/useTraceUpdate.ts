import React, { useEffect, useRef } from 'react'

export function useTraceUpdate(props: React.PropsWithChildren) {
  const prev = useRef(props)
  useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      // @ts-ignore
      if (prev.current[k] !== v) {
        // @ts-ignore
        ps[k] = [prev.current[k], v]
      }
      return ps
    }, {})
    if (Object.keys(changedProps).length > 0) {
      console.log('Changed props:', changedProps)
    }
    prev.current = props
  })
}
