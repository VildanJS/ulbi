import { FC } from 'react'

import profileReducer from '@/features/profile'
import { Page } from '@/shared/ui/deprecated/Page'
import { DynamicModuleLoader, ReducersList } from '@/shared/utils/components/DynamicModuleLoader'

import { ProfilePageCard } from './PofilePageCard'
import cls from './ProfilePage.module.scss'
import { ProfilePageHeader } from './ProfilePageHeader'
import { IProfilePage } from '../types'

const reducers: ReducersList = {
  profile: profileReducer
}

const ProfilePage: FC<IProfilePage> = () => {
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <Page data-testid='ProfilePage' className={cls.profilePage}>
        <ProfilePageHeader />
        <ProfilePageCard />
      </Page>
    </DynamicModuleLoader>
  )
}
export default ProfilePage
