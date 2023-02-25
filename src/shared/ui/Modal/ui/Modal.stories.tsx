import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, odio, sunt! Ad consectetur eligendi excepturi ipsa quae quasi quibusdam soluta voluptas. Adipisci aliquid aut beatae cupiditate, itaque libero quaerat sit.',
  isOpen: true,
}

