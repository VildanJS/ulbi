import { screen } from '@testing-library/react'
import { withTranslation } from 'react-i18next'

import { renderWithOptions } from '@/shared/utils/tests/renderWithOptions'
import '@/shared/config/i18n/i18nForTest'

import { Sidebar } from './Sidebar'

describe('button', () => {
  test('button', () => {
    const WithTranslationSidebar = withTranslation()(Sidebar)
    renderWithOptions(<WithTranslationSidebar />, { route: '/' })
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
})
