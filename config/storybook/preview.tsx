import 'loki/configure-react'
import '../../src/styles/style.scss' // чтобы стили появились в сторибук
import { addDecorator, Story } from '@storybook/react'
import { Theme } from '../../src/app/providers/ThemeProvider'
import { BrowserRouter } from 'react-router-dom'
import { withThemes } from 'storybook-addon-themes'

export const parameters = {
  themes: {
    default: 'dark-theme',
    list: [
      {
        name: 'light-theme',
        class: ['app', Theme.LIGHT]
      },
      {
        name: 'dark-theme',
        class: ['app', Theme.DARK]
      },
    ],
  },

}

// декораторы для роутера
export const decorators = [
  (StoryComponent: Story) => (
    <BrowserRouter>
      <StoryComponent/>
    </BrowserRouter>
  )
]

// добавляем декоратор для поддержки тем
addDecorator(withThemes)


