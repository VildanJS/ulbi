import { ComponentStory, ComponentMeta } from '@storybook/react'
import LoginForm from './LoginForm'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  decorators: [StoreDecorator({
    loginForm: {
      username: 'admin',
      password: '123'
    }
  })]
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const withError = Template.bind({})
withError.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123',
    error: 'error', }
})]

export const isLoading = Template.bind({})
isLoading.decorators = [StoreDecorator({
  loginForm: {
    username: 'admin',
    password: '123',
    isLoading: true }
})]
