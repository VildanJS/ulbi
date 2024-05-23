// TODO refactor for updateProfileData and getProfileIsReadonly
/* eslint-disable vildan/layer-imports */
import { FC } from 'react'

import classNames from 'classnames'
import { IProfile } from '@/entities/Profile'
import { getProfileIsReadonly, updateProfileData } from '@/features/profile'
import { Form, Formik } from 'formik'
import ContentLoader from 'react-content-loader'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Country, Currency } from '@/shared/const/common'
import { forFormikField } from '@/shared/ui/redesigned/Dropdowns/AppSelect/ui/AppSelect/ui/AppSelect'
import { HStack, VStack } from '@/shared/ui/redesigned/Stack'
import * as Yup from 'yup'


import { AppButton } from '@/shared/ui/redesigned/AppButton'
import { AppTextField } from '@/shared/ui/redesigned/AppInput'
import { Avatar } from '@/shared/ui/redesigned/Avatar'
import { Card } from '@/shared/ui/redesigned/Card'
import { AppItem, AppSelect } from '@/shared/ui/redesigned/Dropdowns/AppSelect'
import { Skeleton } from '@/shared/ui/redesigned/Skeleton'
import { Text } from '@/shared/ui/redesigned/Text'
import { useAppDispatch } from '@/shared/utils/hooks/useAppDispatch/useAppDispatch'

import cls from './ProfileCard.module.scss'
import { IProfileCard } from '../types'

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))
export const MyLoader: FC = (props) => (
  <ContentLoader
    speed={2}
    width={500}
    height={150}
    viewBox="0 0 265 230"
    backgroundColor="#f3f3f3"
    foregroundColor="#6d6969"
    {...props}
  >
    <rect x="15" y="15" rx="4" ry="4" width="350" height="25" />
    <rect x="15" y="50" rx="2" ry="2" width="350" height="150" />
    <rect x="15" y="230" rx="2" ry="2" width="170" height="20" />
    <rect x="60" y="230" rx="2" ry="2" width="170" height="20" />
  </ContentLoader>
)


const AppSelectWithFormik = forFormikField(AppSelect)

const initialValues: IProfile =  {
  id: '',
  firstname: '',
  lastname: '',
  age: '',
  city: '',
  username: '',
  avatar: '',
  currency: Currency.RUB,
  country: Country.Russia,
}


export const ProfileCard: FC<IProfileCard> = (props) => {
  const readonly = useSelector(getProfileIsReadonly)
  const { t } = useTranslation('profile')
  const {
    isLoading,
    data = initialValues,
    error,
    className,
  } = props


  const profileCardClass = classNames(className, cls.profileCard, { [cls.readonly]: readonly })
  const loadingProfileCardClass = classNames(profileCardClass, cls.loading)

  const dispatch = useAppDispatch()


  if (isLoading) {
    return (
      <Card borderRadius={'round'} padding="24" max>
        <VStack gap="32">
          <HStack max justify='Center'>
            <Skeleton border="100%" width={128} height={128} />
          </HStack>
          <HStack gap="32" max>
            <VStack gap="16" max>
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
            </VStack>

            <VStack gap="16" max>
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
              <Skeleton width="100%" height={38} />
            </VStack>
          </HStack>
        </VStack>
      </Card>
    )
  }

  if (error) {
    return (
      <div className={loadingProfileCardClass}>
        <Text
          theme='error'
          title={t('Try to reload the page')}
          text={t('An error occurred while loading the profile')}
          align="center"
          data-testid={'ProfileCard.Error'}
        ></Text>
      </div>
    )
  }

  return (
    <Card borderRadius={'round'} padding={'24'} className={profileCardClass}>
      <Formik
        initialValues={data}
        enableReinitialize={true}
        validationSchema={Yup.object({
          username: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Please enter a username'),
          firstname: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Please enter a firstname'),
          lastname: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Please enter a lastname'),
          age: Yup.number()
            .typeError('That doesn\'t look like an age')
            .required('Please enter a age')
            .positive()
            .integer()
        })}
        onSubmit={async (values, actions) => {
          await sleep(500)
          console.log({ values, actions })
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
          if (PROJECT_NAME !== 'storybook') dispatch(updateProfileData(values))
        }}
      >
        {({
          values,
          errors,
          touched,
          isSubmitting,
          resetForm
        }) => {
          return (
            <Form>
              { values?.avatar && (
                <div className={cls.avatarWrapper}>
                  <Avatar
                    size={128}
                    src={values?.avatar}
                    alt='аватар пользователя'
                  ></Avatar>
                </div>)
              }
              { errors.username
                ? <div className={cls.gridError}>{errors.username}</div>
                : null
              }
              <HStack gap={'32'}>
                <VStack max gap={'16'}>
                  <AppTextField
                    height='m'
                    formikfield='username'
                    label='Username'
                    placeholder='Username'
                    id='username'
                    name='username'
                    type='text'
                  />

                  <AppTextField
                    height='m'
                    type='text'
                    formikfield='firstname'
                    placeholder='First Name'
                    label='First Name'
                    id='firstname'
                    name='firstname'
                    data-testid='ProfileCard.firstname'
                  />

                  <AppTextField
                    height='m'
                    type='text'
                    formikfield='lastname'
                    placeholder='Last Name'
                    label='Last Name'
                    id='lastname'
                    name='lastname'
                    data-testid='ProfileCard.lastName'
                  />

                  <AppTextField
                    height='m'
                    type='text'
                    formikfield='age'
                    placeholder='Age'
                    label='Age'
                    id='age'
                    name='age'
                    data-testid='ProfileCard.age'
                  />

                </VStack>
                <VStack max gap={'16'}>
                  <AppTextField
                    height='m'
                    type='text'
                    formikfield='city'
                    placeholder='City'
                    label='City'
                    id='city'
                    name='city'
                    data-testid='ProfileCard.city'
                  />

                  <AppSelectWithFormik
                    selectedKey={values?.country}
                    formikField={'country'}
                    label={'Страна'}
                    id={'country'}
                    name={'country'}
                  >
                    <AppItem id={Country.Russia} textValue={Country.Russia}>
                      {Country.Russia}
                    </AppItem>
                    <AppItem
                      id={Country.Kazakhstan}
                      textValue={Country.Kazakhstan}
                    >
                      {Country.Kazakhstan}
                    </AppItem>
                    <AppItem id={Country.Armenia} textValue={Country.Armenia}>
                      {Country.Armenia}
                    </AppItem>
                    <AppItem id={Country.Belarus} textValue={Country.Belarus}>
                      {Country.Belarus}
                    </AppItem>
                    <AppItem id={Country.Ukraine} textValue={Country.Ukraine}>
                      {Country.Ukraine}
                    </AppItem>
                  </AppSelectWithFormik>



                  <AppSelectWithFormik
                    selectedKey={values?.currency}
                    label={'Валюта'}
                    formikField={'currency'}
                    id={'currency'}
                    name={'currency'}
                  >
                    <AppItem id={Currency.USD} textValue={Currency.USD}>
                      {Currency.USD}
                    </AppItem>
                    <AppItem id={Currency.RUB} textValue={Currency.RUB}>
                      {Currency.RUB}
                    </AppItem>
                    <AppItem id={Currency.TNG} textValue={Currency.TNG}>
                      {Currency.TNG}
                    </AppItem>
                  </AppSelectWithFormik>

                </VStack>
              </HStack>

              <div className={cls.buttonsWrapper}>
                <AppButton
                  type='button'
                  variant='outline'
                  data-testid='ProfileCard.ResetButton'
                  onPress={() => resetForm({ values: data })}
                >
                  Reset
                </AppButton>
                <AppButton
                  data-testid='ProfileCard.SubmitButton'
                  type='submit'
                  variant='outline'
                  disabled={isSubmitting}
                >
                  Submit
                </AppButton>
              </div>
            </Form>
          )
        }}
      </Formik>
    </Card>
  )
}
