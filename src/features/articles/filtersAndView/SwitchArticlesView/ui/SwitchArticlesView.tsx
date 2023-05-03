import { FC, FunctionComponent, SVGAttributes } from 'react'
import cls from './SwitchArticlesView.module.scss'
import { ISwitchArticlesView } from '../types'
import classNames from 'classnames'
import { ArticleViewType } from '@/entities/Article'
import ListIcon from '@/shared/assets/icons/list.svg'
import TileIcon from '@/shared/assets/icons/tiled.svg'
import { Button, ButtonThemes } from '@/shared/ui/Button'
import { useTraceUpdate } from '@/shared/utils/hooks/useTraceUpdate/useTraceUpdate'

type ViewTypes = {
  [key in ArticleViewType]: {
    Icon: FunctionComponent<SVGAttributes<SVGElement>>,
    view: ArticleViewType
  }
}

const viewTypes: ViewTypes = {
  ['cards']: {
    Icon: TileIcon,
    view: 'cards'
  },
  ['full']: {
    Icon: ListIcon,
    view: 'full'
  }
}

export const SwitchArticlesView: FC<ISwitchArticlesView> = (props) => {
  const { className, changeViewHandler, view: currentView } = props

  const switchArticlesViewClass = classNames(className, cls.switchArticlesView)

  const onChangeView = (view: string) => () => {
    changeViewHandler(view)
  }

  return (
    <div className={switchArticlesViewClass}>
      {Object.entries(viewTypes).map(([key, { Icon, view }]) => {
        return (
          <Button
            theme={ButtonThemes.CLEAR}

            key={key}
            onClick={onChangeView(view)}>
            <Icon className={classNames(cls.icon, { [cls.notSelected]: currentView !== view })} />
          </Button>
        )
      })}
    </div>
  )
}
