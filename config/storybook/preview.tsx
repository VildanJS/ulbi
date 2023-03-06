import 'loki/configure-react'
import '../../src/app/styles/style.scss' // чтобы стили появились в сторибук
import {addDecorator, Story} from '@storybook/react'
import {Theme} from '../../src/app/providers/ThemeProvider'
import {withThemes} from 'storybook-addon-themes'
import {BrowserRouter} from 'react-router-dom'

export const parameters = {
  themes: {
    default: Theme.DARK,
    list: [
      {
        name: Theme.LIGHT,
        class: ['app', Theme.LIGHT]
      },
      {
        name: Theme.DARK,
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


