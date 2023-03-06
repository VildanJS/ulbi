import {FC} from 'react'
import {useTranslation} from 'react-i18next'
import cls from './ProfilePage.module.scss'
import {IProfilePage} from '../types'
import classNames from 'classnames'
import {DynamicModuleLoader, ReducerList} from 'shared/utils/components/DynamicModuleLoader'
import {profileReducer} from 'entities/Profile'


const reducers: ReducerList = {
  profile: profileReducer
}

const ProfilePage: FC<IProfilePage> = (props) => {
  const {t} = useTranslation('profile')

  const {className} = props
  const profilePageClass = classNames(className, cls.profilePage)

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={profilePageClass}>
        {t('title')}
      </div>
    </DynamicModuleLoader>

  )
}
export default ProfilePage
