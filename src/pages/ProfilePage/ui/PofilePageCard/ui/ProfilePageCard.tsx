import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'
import { IProfile, ProfileCard } from '@/entities/Profile'
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading } from '@/features/profile/getProfileCardData'
import { useSelector } from 'react-redux'

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
