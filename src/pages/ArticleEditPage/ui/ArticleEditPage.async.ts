import React from 'react'
import { lazyLoadingTimeout } from '@/shared/utils/lazyLoadingWrap'

export default React.lazy(() => lazyLoadingTimeout(import('./ArticleEditPage'), 1000))
