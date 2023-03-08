import classNames from 'classnames'
import {useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {useTheme} from 'app/providers/ThemeProvider'
import {AppRouter} from 'app/providers/RouterProvider'
import {Navbar} from 'widgets/Navbar'
import {Sidebar} from 'widgets/Sidebar'
import {recoveryAuthData} from 'entities/User' // action

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(recoveryAuthData())
  }, [dispatch])

  const {theme} = useTheme()
  const appClass = classNames('app', theme)
  return (
    <div className={appClass}>
      <Navbar/>
      <main className="d-flex">
        <Sidebar/>
        <AppRouter/>
      </main>
    </div>
  )
}
export default App
