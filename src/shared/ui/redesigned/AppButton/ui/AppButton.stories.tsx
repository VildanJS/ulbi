import { Title, Description, Subtitle, Story, Source, Stories, Controls  } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'

import { AppButton } from './AppButton'

const meta: Meta<typeof AppButton> = {
  title: 'shared/AppButton',
  component: AppButton,
  parameters: {
    componentSubtitle: 'Кнопка',
    docs: {
      page: () => <>
        <Title />
        <Description />
        <Subtitle />

        <Story />
        <Source />
        <Controls />

        <Stories />
      </>
    }
  },
  argTypes: {
    variant: {
      description: 'Список вариантов кнопки',
    },
    className: {
      type: 'string',
      defaultValue: '',
      control: 'text'
    }
  }
}
export default meta

type Story = StoryObj<typeof AppButton>
export const Primary: Story = {
  args: {
    children: 'Subscribe'
  }
}

export const Outline: Story = {
  render: () => <AppButton variant='outline'>Subscribe</AppButton>
}

export const Clear: Story = {
  render: () => <AppButton variant='clear'>Subscribe</AppButton>
}



