import { ReactNode } from 'react'

import { ReducersMapObject } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider'
import i18nForTest from '@/shared/config/i18n/i18nForTest'

export interface IRenderWithOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const renderWithOptions = (component: ReactNode, options: IRenderWithOptions = {}) => {
  const {
    route = '/',
    initialState,
    asyncReducers
  } = options

  return render(
    <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTest}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  )
}
