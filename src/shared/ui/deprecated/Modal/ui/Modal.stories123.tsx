import { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'Shared/Modal',
  component: Modal,
}
export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    children: 'Some text.',
    isOpen: true,
  },
}
