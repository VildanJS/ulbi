import { MutableRefObject, useEffect, useRef } from 'react'
import { IArticle } from '@/entities/Article'

export interface UseInfiniteScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
  isLoading?: boolean,
}

export function useInViewCustom({ isLoading, callback, wrapperRef, triggerRef }: UseInfiniteScrollOptions) {
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const wrapperElement = wrapperRef.current
    const triggerElement = triggerRef.current

    if (callback ) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 1.0,
      }

      observer.current = new IntersectionObserver(([entry], observer) => {
        if (entry.isIntersecting) {
          console.log('-> entry.isIntersecting', entry.isIntersecting)
          callback()
        }
      }, options)

      observer.current.observe(triggerElement)
    }

    return () => {
      if (observer.current && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.current.unobserve(triggerElement)
      }
    }
  }, [callback, triggerRef, wrapperRef, isLoading])
}
