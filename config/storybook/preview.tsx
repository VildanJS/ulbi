import 'loki/configure-react'
import '../../src/app/styles/style.scss' // чтобы стили появились в сторибук

import { Theme } from '../../src/shared/const/theme'

export const parameters = {
  layout: 'fullscreen',
  themes: {
    default: Theme.LIGHT,
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

// добавляем декоратор для поддержки тем
// addDecorator(withThemes)


// декораторы для роутера
// export const decorators = [
//   (StoryComponent: Story) => (
//     <BrowserRouter>
//       <StoryComponent/>
//     </BrowserRouter>
//   )
// ]




