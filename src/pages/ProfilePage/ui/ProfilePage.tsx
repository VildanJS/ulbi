import React, { FC, useEffect } from 'react'
import cls from './ProfilePage.module.scss'
import { IProfilePage } from '../types'
import classNames from 'classnames'
import { DynamicModuleLoader, ReducersList } from '@/shared/utils/components/DynamicModuleLoader'
import profileReducer from '@/features/profile/getProfileCardData'
import { ProfilePageHeader } from './ProfilePageHeader'
import { Page } from '@/shared/ui/Page'
import { ProfilePageCard } from './PofilePageCard'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage: FC<IProfilePage> = () => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <Page className={cls.profilePage}>
        <ProfilePageHeader />
        <ProfilePageCard />
      </Page>
    </DynamicModuleLoader>
  )
}
export default ProfilePage
