import { FC, useCallback } from 'react'

import classNames from 'classnames'
import { getProfileData, getProfileIsReadonly, setReadonly } from '@/features/profile'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { HStack } from '@/shared/ui/redesigned/Stack'

import { getUserAuthData } from '@/entities/User'
import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { Card } from '@/shared/ui/redesigned/Card'
import { Text } from '@/shared/ui/redesigned/Text'
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
    <Card max padding={'24'} borderRadius={'round'} className={profilePageHeaderClass}>
      <HStack max justify={'SpaceBetween'} align={'Center'}>
        <Text size={'L'} text={t('Profile')}></Text>
        {
          isEditable &&
          (readonly
            ? (<AppButton
              data-testid='ProfileCard.EditButton'
              onPress={onEdit}
              className={cls.editBtn}
              variant={'outline'}
            >
              {t('Edit')}
            </AppButton>)
            : (<AppButton
              data-testid='ProfileCard.CancelButton'
              onPress={onCancelEdit}
              className={cls.editBtn}
              variant={'outline'}
            >
              {t('Cancel')}
            </AppButton>))
        }
      </HStack>

    </Card>
  )
}
