import classNames from 'classnames'
import 'styles/style.scss'
import {useTheme} from 'app/providers/ThemeProvider'
import {AppRouter} from 'app/providers/RouterProvider'
import {Navbar} from 'widgets/Navbar'
import {Sidebar} from 'widgets/Sidebar'

const App = () => {

  const {theme} = useTheme()
  const appClass = classNames('app', theme)
  return (
    <div className={appClass}>
      <Navbar/>
      <main className='d-flex'>
        <Sidebar/>
        <AppRouter/>
      </main>
    </div>
  )
}
export default App
