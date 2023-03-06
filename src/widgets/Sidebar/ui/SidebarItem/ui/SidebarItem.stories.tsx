import {ComponentStory, ComponentMeta} from '@storybook/react'
import {SidebarItem} from './SidebarItem'
import {AppRoutePaths} from 'app/config/routeConfig/routeConfig'
import HomeIcon from 'shared/assets/icons/home.svg'

export default {
  title: 'widgets/SidebarItem',
  component: SidebarItem,
} as ComponentMeta<typeof SidebarItem>

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />

export const Primary = Template.bind({})
Primary.args = {
  item: {
    path: AppRoutePaths.main,
    Icon: HomeIcon,
    text: 'Main'
  }
}
