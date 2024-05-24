import { Meta, StoryObj } from '@storybook/react'

import { AppDrawer } from './AppDrawer'

const meta: Meta<typeof AppDrawer> = {
  title: 'Shared/AppDrawer',
  component: AppDrawer,
}
export default meta

type Story = StoryObj<typeof AppDrawer>
export const Default: Story = {
  render: () => (
    <AppDrawer label='Drawer'>
      <h1>This is opened Drawer</h1>
    </AppDrawer>
  )
}


// import { ComponentStory, ComponentMeta } from '@storybook/react'
// import { AppDrawer } from './AppDrawer'
//
// export default {
//   title: 'widgets/AppDrawer',
//   component: AppDrawer,  parameters: {
//     chromatic: { disable: true },
//   }
// } as ComponentMeta<typeof AppDrawer>
//
// const Template: ComponentStory<typeof AppDrawer> = (args) => <AppDrawer {...args} />
//
// export const Primary = Template.bind({})
// Primary.args = {
//   children: 'Primary'
// }
