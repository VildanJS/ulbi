import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { render } from '@testing-library/react'
import i18nForTest from 'shared/config/i18n/i18nForTest'
import { MemoryRouter } from 'react-router-dom'

export interface IRenderWithOptions {
  route?: string
}

export const renderWithOptions = (component: ReactNode, options: IRenderWithOptions = {}) => {
  const { route } = options
  return render(
    <MemoryRouter initialEntries={[route]}>
      <I18nextProvider i18n={i18nForTest}>
        {component}
      </I18nextProvider>
    </MemoryRouter>
  )
}
