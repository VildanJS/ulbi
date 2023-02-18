import { Component, ErrorInfo } from 'react'
import cls from './ErrorBoundary.module.scss'
import { ErrorBoundaryProps, ErrorBoundaryState } from '../types'
import classNames from 'classnames'
import { PageError } from 'widgets/PageError'

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor (props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError () {
    // Update state so the next render will show the fallback UI.
    return { hasError: true }
  }

  componentDidCatch (error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.log(error, errorInfo)
  }

  render () {
    const errorBoundaryClass = classNames(this.props.className, cls.errorBoundary)
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className={errorBoundaryClass}>
          <PageError/>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
