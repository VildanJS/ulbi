// import { ComponentStory, ComponentMeta } from '@storybook/react'
//
//
// import HomeIcon from '@/shared/assets/icons/home.svg'
// import { RouterDecorator } from '@/shared/config/storybook/RouterDecorator'
// import { getRouteMain } from '@/shared/const/router'
//
// import { SidebarItem } from './SidebarItem'
//
//
// export default {
//   title: 'widgets/SidebarItem',
//   component: SidebarItem,
//   parameters: {
//     chromatic: { disable: true },
//   },
//   decorators: [RouterDecorator],
// } as ComponentMeta<typeof SidebarItem>
//
// const Template: ComponentStory<typeof SidebarItem> = (args: any) => <SidebarItem {...args} />
//
// export const Primary = Template.bind({})
// Primary.args = {
//   item: {
//     path: getRouteMain(),
//     Icon: HomeIcon,
//     text: 'Main',
//     icon: 'spectrum-icon-18-Home'
//   }
// }
