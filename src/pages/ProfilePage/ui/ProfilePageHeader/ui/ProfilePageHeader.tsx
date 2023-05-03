import { FC, useCallback } from 'react'
import cls from './ProfilePageHeader.module.scss'
import { IProfilePageHeader } from '../types'
import classNames from 'classnames'
import { Text } from '@/shared/ui/Text/Text'
import { Button, ButtonThemes } from '@/shared/ui/Button'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { getProfileData, getProfileIsReadonly, setReadonly } from '@/features/profile/getProfileCardData'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'
import { getUserAuthData } from '@/entities/User'


export const ProfilePageHeader: FC<IProfilePageHeader> = (props) => {
  const { t } = useTranslation()
  const readonly = useSelector(getProfileIsReadonly)
  const { className } = props
  const profilePageHeaderClass = classNames(className, cls.profilePageHeader)

  const authData = useSelector(getUserAuthData)
  const profileData = useSelector(getProfileData)
  const isEditable = authData?.id === profileData?.id

  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(setReadonly(false))
  }, [dispatch])

  const onCancelEdit = useCallback(() => {
    dispatch(setReadonly(true))
  }, [dispatch])

  return (
    <div className={profilePageHeaderClass}>
      <Text text={t('Profile')}></Text>
      {
        isEditable &&
          (readonly
            ? (<Button
              data-testid='ProfileCard.EditButton'
              onClick={onEdit}
              className={cls.editBtn}
              theme={ButtonThemes.OUTLINE}
            >
              {t('Edit')}
            </Button>)
            : (<Button
              data-testid='ProfileCard.CancelButton'
              onClick={onCancelEdit}
              className={cls.editBtn}
              theme={ButtonThemes.OUTLINE}
            >
              {t('Cancel')}
            </Button>))
      }
    </div>
  )
}
