import { Suspense, useEffect } from 'react'

import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { AppRouterRedesigned } from '@/app/providers/RouterProvider/ui/AppRouterRedesigned'
import { getUserInited, initAuthData } from '@/entities/User'
import { Text } from '@/shared/ui/redesigned/Text'
import { ToggleFeatures } from '@/shared/utils/featereFlags/toggleFeatureFlag'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'
import useTheme from '@/shared/utils/hooks/useTheme/useTheme'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'

import { ErrorBoundary } from './providers/ErrorBoundary'
import { AppRouter } from './providers/RouterProvider'

const App = () => {
  const dispatch = useAppDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(initAuthData())
  }, [dispatch])

  const { theme } = useTheme()
  const appClass = classNames('app', theme)
  const appClassRedesigned = classNames('app-redesigned', theme)


  useEffect(() => {
    document.body.classList.remove(...document.body.classList)
    document.body.classList.add('app-redesigned', theme)
  }, [theme] )

  if (!inited) {
    return <Text text={'Загрузка пока не инициализировано...'} />
  }

  return (
    <ToggleFeatures
      feature={'isAppRedesigned'}
      on={<AppRouterRedesigned className={appClassRedesigned} />}
      off={
        <BrowserRouter>
          <ErrorBoundary>
            <div className={appClass}>
              <Suspense fallback=''>
                <Navbar />
                <main className='d-flex'>
                  <Sidebar />
                  {inited && <AppRouter />}
                </main>
              </Suspense>
            </div>
          </ErrorBoundary>
        </BrowserRouter>
      }
    />
  )
}
export default App
