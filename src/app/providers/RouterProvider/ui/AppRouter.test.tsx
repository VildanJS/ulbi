import { cleanup } from '@testing-library/react'
import { UserRole } from '@/entities/User'
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const/router'
import { renderWithOptions } from '@/shared/utils/tests/renderWithOptions'

import AppRouter from './AppRouter'

describe('app/router/AppRouter',  () => {
  afterEach(cleanup)

  test('Рендер страницы', async () => {
    const { findByTestId } = renderWithOptions(<AppRouter />, {
      route: getRouteAbout()
    })

    const page = await findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  test('Неизвестный маршрут', async () => {
    const { findByTestId } = renderWithOptions(<AppRouter />, {
      route: '/some/incorrect/path/blablabla'
    })

    const page = await findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test('Неавторизованный пользователь редиректится на главную', async () => {
    const { findByTestId } = renderWithOptions(<AppRouter />, {
      route: getRouteProfile('1')
    })

    const page = await findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  test('Авторизованный пользователь заходит на страницу для которой нужна авторизация', async () => {
    const { findByTestId } = renderWithOptions(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: {
        user: { _inited: true, authData: {} }
      }
    })

    expect(await findByTestId('ProfilePage')).toBeInTheDocument()
  })

  test('Авторизованный пользователь, но не имеет соотвествующую роль странице', async () => {
    const { findByTestId } = renderWithOptions(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: { _inited: true, authData: {} }
      }
    })

    const page = await findByTestId('ForbiddenPage')
    expect(page).toBeInTheDocument()
  })

  test('Авторизованный пользователь и есть соотвествующую роль странице', async () => {
    const { findByTestId } = renderWithOptions(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: {
        user: {
          _inited: true,
          authData: {
            roles: [UserRole.ADMIN, ]
          }
        }
      }
    })

    const page = await findByTestId('AdminPanelPage')
    expect(page).toBeInTheDocument()
  })
})

