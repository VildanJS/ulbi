import { useEffect } from 'react'

import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import useTheme from 'shared/utils/hooks/useTheme/useTheme'

import { getUserInited, recoveryAuthData } from '@/entities/User'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'

import { AppRouter } from './providers/RouterProvider'










const App = () => {
  const dispatch = useDispatch()
  const inited = useSelector(getUserInited)

  useEffect(() => {
    dispatch(recoveryAuthData())
  }, [dispatch])

  const { theme } = useTheme()
  const appClass = classNames('app', theme)
  return (
    <div className={appClass}>
      <Navbar />

      <main className="d-flex">
        <Sidebar />
        {inited && <AppRouter />}
      </main>

    </div>
  )
}
export default App
