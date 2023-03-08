import React, { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/utils/hooks/useAppDispatch/useAppDispatch'
import { useTranslation } from 'react-i18next'
import cls from './ProfilePage.module.scss'
import { IProfilePage } from '../types'
import classNames from 'classnames'
import { DynamicModuleLoader, ReducersList } from 'shared/utils/components/DynamicModuleLoader'
import {
  ProfileCard, profileReducer,
  fetchProfileData,
  getProfileData, getProfileError,
  getProfileIsLoading,
} from 'entities/Profile'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage: FC<IProfilePage> = (props) => {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)

  useEffect(() => {
    dispatch(fetchProfileData())

  }, [dispatch])

  const { className } = props
  const profilePageClass = classNames(className, cls.profilePage)

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={profilePageClass}>
        <ProfileCard data={data}/>
      </div>
    </DynamicModuleLoader>

  )
}
export default ProfilePage
