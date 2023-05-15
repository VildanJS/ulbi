import { action } from '@storybook/addon-actions'
import { Meta, StoryObj } from '@storybook/react'
import { Formik } from 'formik'
import { Country } from 'shared/const/common'

import { AppSelect } from './AppSelect'
import cls from './AppSelect.module.scss'
import { AppItem } from '../../AppItem'



const meta: Meta<typeof AppSelect> = {
  title: 'Shared/AppSelect',
  component: AppSelect,
}
export default meta

type Story = StoryObj<typeof AppSelect>
export const Default: Story = {
  render: () => (
    <Formik
      initialValues={Country}
      onSubmit={action('onSubmit')}
    >
      <AppSelect className={cls.grid_1}>
        <AppItem id={Country.Armenia} textValue={Country.Armenia}>{Country.Armenia}</AppItem>
        <AppItem id={Country.Belarus} textValue={Country.Belarus}>{Country.Belarus}</AppItem>
        <AppItem id={Country.Ukraine} textValue={Country.Ukraine}>{Country.Ukraine}</AppItem>
      </AppSelect>
    </Formik>
  )
}

