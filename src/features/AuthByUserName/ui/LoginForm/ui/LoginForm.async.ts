import {lazyLoadingTimeout} from 'shared/utils/lazyLoadingWrap'
import React from 'react'

export default React.lazy(() => lazyLoadingTimeout(import('./LoginForm'), 1000))
