import { FC, useEffect } from 'react'

import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading } from '@/features/profile'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { IProfile, ProfileCard } from '@/entities/Profile'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'

export const ProfilePageCard: FC = () => {
  const { id } = useParams<{ id: string }>()
  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)

  const dispatch = useAppDispatch()


  useEffect(() => {
    if (PROJECT_NAME !== 'storybook' && PROJECT_NAME !== 'jest') {
      if (id) dispatch(fetchProfileData(id))
    }
  }, [dispatch, id])

  return (
    <>
      <ProfileCard
        data={data as IProfile}
        isLoading={isLoading}
        error={error}
      />
    </>
  )
}
