import React, { Suspense } from 'react'

import { createRoot } from 'react-dom/client'

import '@/shared/config/i18n/i18next'
import App from '@/app/App'
import { StoreProvider } from '@/app/providers/StoreProvider'
import { ThemeProvider } from '@/app/providers/ThemeProvider'

import '@/app/styles/style.scss'
import { useJsonSettings } from '@/entities/User'
import { ErrorBoundary } from '@/app/providers/ErrorBoundary'


const root = createRoot(document.getElementById('root') as Element)


const withThemeHOC = (Component: React.ComponentType) => {
  return () => {
    const { theme } = useJsonSettings()
    return (
      <ThemeProvider initialTheme={theme}>
        <Component />
      </ThemeProvider>
    )
  }
}

const AppWithTheme = withThemeHOC(App)

root.render(
  <ErrorBoundary>
    <Suspense fallback={<div>Загрузка...</div>}>
      <StoreProvider>
        <AppWithTheme />
      </StoreProvider>
    </Suspense>
  </ErrorBoundary>
)
