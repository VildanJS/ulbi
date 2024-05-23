import { FC } from 'react'

import classNames from 'classnames'
import { ErrorMessage, Form, Formik } from 'formik'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { AppTextField } from '@/shared/ui/redesigned/AppInput'
import { Card } from '@/shared/ui/redesigned/Card'

import cls from './AddNewComment.module.scss'
import { IAddNewComment } from '../types'

export const AddNewComment: FC<IAddNewComment> = (props) => {
  const { className, sendComment } = props
  const addNewCommentClass = classNames(className, cls.addNewComment)

  return (
    <Card max padding={'32'} borderRadius={'round'}  data-testid='AddNewCommentElement' className={addNewCommentClass}>
      <Formik
        initialValues={{
          message: ''
        }}
        onSubmit={async (values, formikHelpers) => {
          sendComment(values.message)
          formikHelpers.resetForm()
        }}
      >
        <Form className={cls.form}>
          <AppTextField
            id="message"
            name="message"
            height={'m'}
            placeholder="Enter a message"
            type="text"
            data-testid='AddNewComment.Input' />
          <ErrorMessage name="message" />
          <AppButton variant={'outline'} data-testid='AddNewComment.Button' type="submit">
            Отправить
          </AppButton>
        </Form>
      </Formik>
    </Card>
  )
}
