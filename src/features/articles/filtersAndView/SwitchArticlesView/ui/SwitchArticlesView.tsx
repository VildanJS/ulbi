import { FC, FunctionComponent, SVGAttributes } from 'react'

import classNames from 'classnames'

import { ArticleViewType } from '@/entities/Article'
import ListIcon from '@/shared/assets/icons/burger.svg'
import TileIcon from '@/shared/assets/icons/tile.svg'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { Card } from '@/shared/ui/redesigned/Card'
import { Icon } from '@/shared/ui/redesigned/Icon'

import cls from './SwitchArticlesView.module.scss'
import { ISwitchArticlesView } from '../types'

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
    <Card borderRadius={'round'} className={switchArticlesViewClass}>
      {Object.entries(viewTypes).map(([key, { Icon: IconSvg, view }]) => {
        return (
          <AppButton
            variant={'clear'}
            key={key}
            onPress={onChangeView(view)}>
            <Icon
              Svg={IconSvg}
              className={classNames(cls.icon, { [cls.notSelected]: currentView !== view })}
            />
          </AppButton>
        )
      })}
    </Card>
  )
}
