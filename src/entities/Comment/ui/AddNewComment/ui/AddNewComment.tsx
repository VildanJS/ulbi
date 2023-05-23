import { FC } from 'react'

import classNames from 'classnames'
import { ErrorMessage, Field, Form, Formik } from 'formik'

import cls from './AddNewComment.module.scss'
import { IAddNewComment } from '../types'

export const AddNewComment: FC<IAddNewComment> = (props) => {
  const { className, sendComment } = props
  const addNewCommentClass = classNames(className, cls.addNewComment)

  return (
    <div data-testid='AddNewCommentElement' className={addNewCommentClass}>
      <Formik
        initialValues={{
          message: ''
        }}
        onSubmit={async (values, formikHelpers) => {
          sendComment(values.message)
          formikHelpers.resetForm()
        }}
      >
        <Form>
          <label htmlFor="message">Message</label>
          <Field
            id="message"
            name="message"
            placeholder="Enter a message"
            type="text"
            data-testid='AddNewComment.Input'
          />
          <ErrorMessage name="message" />
          <button data-testid='AddNewComment.Button' type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  )
}
