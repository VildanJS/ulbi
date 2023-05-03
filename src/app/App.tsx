import classNames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useTheme } from '@/app/providers/ThemeProvider'
import { AppRouter } from '@/app/providers/RouterProvider'
import { Navbar } from '@/widgets/Navbar'
import { Sidebar } from '@/widgets/Sidebar'
import { getUserInited, recoveryAuthData } from '@/entities/User' // action

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
