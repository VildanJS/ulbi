import {ComponentStory, ComponentMeta} from '@storybook/react'
import {ProfileCard} from './ProfileCard'
import {Country, Currency} from '@/shared/const/common'
import avatar from '@/shared/assets/tests/storybook.jpg'
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator'


export default {
  title: 'Entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Default = Template.bind({})
Default.args = {
  data: {
    firstname: 'Vildan',
    lastname: 'Khabibov',
    age: '31',
    city: 'Oktyabrsky',
    username: 'admin',
    avatar,
    currency: Currency.RUB,
    country: Country.Russia
  }
}

Default.decorators = [StoreDecorator({})]

