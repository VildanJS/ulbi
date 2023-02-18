import React from 'react'
import 'shared/config/i18n/i18next'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from 'app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

const root = createRoot(document.getElementById('root') as Element)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App/>
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
)
