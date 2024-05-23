// import React, { ReactNode } from 'react'
//
// import { useButton } from 'react-aria'
// import { ButtonContext, ButtonProps, useContextProps } from 'react-aria-components'
//
// import { AppButton } from './AppButton'
// interface AppButtonComponentProps {
//   className?: string
// }
//
// export const AppButtonComponent = React.forwardRef(
//   (props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
//
//     [props, ref] = useContextProps(props, ref, ButtonContext)
//
//     const { buttonProps, isPressed } = useButton(props, ref)
//
//     return (
//       <AppButton
//         buttonRef={ref}
//         {...buttonProps}
//       >{props.children as ReactNode}</AppButton>
//     )
//   })
