import { FC, useCallback } from 'react'

import classNames from 'classnames'
import { getProfileData, getProfileIsReadonly, setReadonly } from 'features/profile'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

import { getUserAuthData } from '@/entities/User'
import { AppButton } from '@/shared/ui/AppButton'
import { Text } from '@/shared/ui/Text'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'

import cls from './ProfilePageHeader.module.scss'
import { IProfilePageHeader } from '../types'


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
            ? (<AppButton
              data-testid='ProfileCard.EditButton'
              onPress={onEdit}
              className={cls.editBtn}
              theme={'outline'}
            >
              {t('Edit')}
            </AppButton>)
            : (<AppButton
              data-testid='ProfileCard.CancelButton'
              onPress={onCancelEdit}
              className={cls.editBtn}
              theme={'outline'}
            >
              {t('Cancel')}
            </AppButton>))
      }
    </div>
  )
}
