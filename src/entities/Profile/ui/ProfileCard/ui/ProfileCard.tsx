import { FC } from 'react'
import cls from './ProfileCard.module.scss'
import { IProfileCard } from '../types'
import classNames from 'classnames'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Button, ButtonThemes } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

export const ProfileCard: FC<IProfileCard> = (props) => {
  const { t } = useTranslation('profile')
  const {
    className,
    data
  } = props
  const profileCardClass = classNames(className, cls.profileCard)

  return (
    <div className={profileCardClass}>
      <div className={cls.header}>
        <Text text={t('Profile')}></Text>
        <Button className={cls.editBtn} theme={ButtonThemes.OUTLINE}>
          {t('Edit')}
        </Button>
      </div>
      <div className={cls.content}>
        <Input
          value={data?.firstname}
          placeholder={t('Enter your firstname')}
          className={cls.profileInput}>
        </Input>
        <Input
          value={data?.lastname}
          placeholder={t('Enter your lastname')}
          className={cls.profileInput}>
        </Input>
      </div>
    </div>
  )
}
