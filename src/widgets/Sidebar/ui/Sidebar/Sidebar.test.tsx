import { screen } from '@testing-library/react'
import { withTranslation } from 'react-i18next'
import { Sidebar } from './Sidebar'
import 'app/config/i18n/i18nForTest'
import { renderWithOptions } from 'shared/utils/tests/renderWithOptions'

describe('button', () => {
  test('button', () => {
    const WithTranslationSidebar = withTranslation()(Sidebar)
    renderWithOptions(<WithTranslationSidebar/>, {route: '/'})
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
})
