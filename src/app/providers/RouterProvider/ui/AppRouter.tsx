import {Route, Routes, RouteProps} from 'react-router-dom'
import {AppRouteConfig} from 'app/config/routeConfig/routeConfig'

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(AppRouteConfig).map((props: RouteProps) => (
        <Route
          key={props.path}
          path={props.path}
          element={props.element}
        />
      ))}
    </Routes>
  )
}

export default AppRouter
