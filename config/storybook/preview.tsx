import React from 'react'
import { Preview, StoryFn, StoryContext } from '@storybook/react'
// import 'loki/configure-react'
import '../../src/app/styles/style.scss' // чтобы стили появились в сторибук
import { Theme } from '../../src/shared/const/theme'


const withTheme = (Story: StoryFn, context: StoryContext) => {
  const { theme } = context.globals
  if(theme === 'side-by-side') {
    return (
      <div className={'flex'}>
        <div
          style={{ flexGrow: '1', minHeight: 'fit-content', padding: '32px' }}
          className={`app-redesigned ${Theme.LIGHT}`}
        >
          <Story />
        </div>
        <div
          style={{ flexGrow: '1', minHeight: 'fit-content', padding: '32px' }}
          className={`app-redesigned ${Theme.DARK}`}
        >
          <Story />
        </div>
      </div>
    )
  } else {
    return (
      <div
        style={{ flexGrow: '1', minHeight: 'fit-content', padding: '32px' }}
        className={`app-redesigned ${theme}`}
      >
        <Story />
      </div>
    )
  }
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: Theme.LIGHT,
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'light' },
          { value: 'dark', icon: 'circle', title: 'dark' },
          { value: 'side-by-side', icon: 'sidebar', title: 'side by side' },
        ],
        dynamicTitle: true,
      },
    }
  },
  decorators: [withTheme]
}

export default preview;


