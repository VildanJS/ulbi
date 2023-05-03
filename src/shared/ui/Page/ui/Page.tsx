import { FC, MutableRefObject, useRef, UIEvent, useEffect, LegacyRef } from 'react'
import cls from './Page.module.scss'
import { IPage } from '../types'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'
import { setScrollPosition } from '@/features/scrollPositionSaver'
import { useSelector } from 'react-redux'
import {
  getScrollPositionByPath
} from '@/features/scrollPositionSaver/services/selectors/getScrollPosition'
import { StateSchema } from '@/app/providers/StoreProvider'
import { useThrottle } from '@/shared/utils/hooks/useTrottle/useTrottle'

export const Page: FC<IPage> = (props) => {
  const { className, children, } = props
  const pageClass = classNames(className, cls.page)

  const { pathname } = useLocation()
  const dispatch = useAppDispatch()


  const onScroll = useThrottle((event: UIEvent<HTMLDivElement>) => {
    dispatch(setScrollPosition({
      position: event.currentTarget.scrollTop,
      path: pathname
    }))
  }, 500)

  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const currentScrollOnPage = useSelector(
    (state: StateSchema) => getScrollPositionByPath(state, pathname)
  )


  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    wrapperRef.current.scrollTop = +currentScrollOnPage
  }, [])



  return (
    <div ref={wrapperRef} onScroll={onScroll} className={pageClass}>
      {children}
    </div>
  )
}

// Можно и memo сохранить
// const typedMemo: <T>(c: T) => T = memo;
// export const Select = typedMemo(<T extends string>(props: ISelectProps<T>) => {...}
