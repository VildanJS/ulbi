import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import 'app/config/i18n/i18next'
import App from 'app/App'
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import 'app/styles/style.scss'
import { StoreProvider } from 'app/providers/StoreProvider'

const root = createRoot(document.getElementById('root') as Element)

root.render(
  <StoreProvider>
    <React.StrictMode>
      <BrowserRouter>
        <ErrorBoundary>
          <ThemeProvider initialTheme={Theme.LIGHT}>
            <App/>
          </ThemeProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </React.StrictMode>
  </StoreProvider>
)
