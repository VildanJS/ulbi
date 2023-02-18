import { screen } from '@testing-library/react'
import { withTranslation } from 'react-i18next'
import { Sidebar } from './Sidebar'
import 'shared/config/i18n/i18nForTest'
import { renderWithTranslation } from 'shared/utils/tests/renderWithTranslation'


describe('button', () => {
  test('button', () => {
    const WithTranslationSidebar = withTranslation()(Sidebar)
    renderWithTranslation(<WithTranslationSidebar/>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })
})
