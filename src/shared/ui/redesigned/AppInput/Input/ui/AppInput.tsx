import  { ComponentType, FC, Key, useContext } from 'react'

import { FormikContext, useFormikContext } from 'formik'
import { Input, InputProps } from 'react-aria-components'


interface AppInputProps extends InputProps {
  className?: string
  formikfield?: string
}

const AppInput_: FC<AppInputProps> = (props) => {
  const { className, ...inputProps } = props

  return (
    <Input className={className} {...inputProps} />
  )
}

const withFormikField = (Component: ComponentType) => {
  return (props: AppInputProps) => {
    const { name = '' } = props
    const formikContext = useContext(FormikContext)
    const formikProps = useFormikContext()

    if (formikContext && formikContext.values) {
      const formikHandler = (key: Key) => {
        if (formikProps) formikProps.handleChange(key)
      }
      return <Component value={formikContext.values[name]} onChange={formikHandler} {...props} />
    }

    return <Component {...props} />
  }
}

export const AppInput = withFormikField(AppInput_)
