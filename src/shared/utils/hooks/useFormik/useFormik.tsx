import React from 'react'

import { FormikConfig, FormikValues, useFormik } from 'formik'

// Create empty context
const FormikContext = React.createContext({})

interface FormikContextProps extends FormikConfig<FormikValues> {
  className?: string
}

export const FormikProvider = (props: FormikContextProps) => {
  const { children, ...otherProps } = props
  const formikStateAndHelpers = useFormik(otherProps)
  return (
    <FormikContext.Provider value={formikStateAndHelpers}>
      {typeof children === 'function'
        ? children(formikStateAndHelpers)
        : children}
    </FormikContext.Provider>
  )
}
