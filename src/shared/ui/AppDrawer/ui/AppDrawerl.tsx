import React, {
  ReactElement,
  useCallback,
  useEffect
} from 'react'
import cls from './AppDrawer.module.scss'
import classNames from 'classnames'
import { useOverlayTrigger } from 'react-aria'
import {  useOverlayTriggerState } from 'react-stately'
import { AppButton } from '@/shared/ui/AppButton'
import { Overlay } from '@/shared/ui/Overlay/Overlay'
import { Portal } from '@/shared/ui/Portal'
import { AnimationProvider, useAnimationLibs } from '@/shared/utils/components/AnimationProvider'


interface DrawerProps {
  label: string,
  className?: string,
  children: ReactElement
}

const height = window.innerHeight - 100

const DrawerContent = (props: DrawerProps) => {
  const { Spring, Gesture } = useAnimationLibs()

  const { className, children, label, ...otherProps } = props

  const ref = React.useRef(null)
  const state = useOverlayTriggerState(otherProps)

  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state
  )
  console.log('-> state', state)

  const AppDrawerClass = classNames(className, cls.drawer)

  const [{ y }, api] = Spring.useSpring(() => ({ y: height }))

  const openDrawer = useCallback(() => {
    api.start({ y: 0, immediate: false })
  }, [api])

  useEffect(() => {
    if (state.isOpen) {
      openDrawer()
    }
  }, [api, state.isOpen, openDrawer])

  const close = (velocity = 0) => {
    api.start({
      y: height,
      immediate: false,
      config: { ...Spring.config.stiff, velocity },
      onResolve: state.close,
    })
  }

  const bind = Gesture.useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
    }) => {
      if (my < -70) cancel()

      if (last) {
        if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
          close()
        } else {
          openDrawer()
        }
      } else {
        api.start({ y: my, immediate: true })
      }
    },
    {
      from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true,
    },
  )


  const display = y.to((py) => (py < height ? 'block' : 'none'))




  return (
    <>
      <AppButton {...triggerProps} buttonRef={ref}>{label}</AppButton>
      {state.isOpen &&
        (
          <Portal>
            <div className={AppDrawerClass}>
              <Overlay />

              <Spring.a.div
                className={cls.content}
                style={{ display, y }}
                {...bind()}
              >
                { React.cloneElement( children, overlayProps) }
                <AppButton onPress={state.close}>Close</AppButton>
              </Spring.a.div>
            </div>
          </Portal>
        )}
    </>
  )
}

const AppDrawerAsync = (props: DrawerProps) => {
  const { children, ...otherProps } = props
  const { isLoaded } = useAnimationLibs()

  if(!isLoaded) return <h1>Loading...</h1>

  return <DrawerContent {...otherProps}>
    {children}
  </DrawerContent>
}

export const AppDrawer = (props: DrawerProps) => {
  return (
    <AnimationProvider>
      <AppDrawerAsync {...props} />
    </AnimationProvider>
  )
}
