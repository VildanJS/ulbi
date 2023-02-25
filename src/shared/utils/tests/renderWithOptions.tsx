import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { DeepPartial } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import i18nForTest from 'app/config/i18n/i18nForTest'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'

export interface IRenderWithOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
}

export const renderWithOptions = (component: ReactNode, options: IRenderWithOptions = {}) => {
  const {
    route = '/',
    initialState
  } = options

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTest}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  )
}
