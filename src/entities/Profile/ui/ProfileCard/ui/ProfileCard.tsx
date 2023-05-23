// TODO refactor for updateProfileData and getProfileIsReadonly
/* eslint-disable vildan/layer-imports */
import { FC } from 'react'

import classNames from 'classnames'
import { updateProfileData } from 'features/profile'
import { getProfileIsReadonly } from 'features/profile'
import { Formik, ErrorMessage, Field, Form } from 'formik'
import ContentLoader from 'react-content-loader'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { forFormikField } from 'shared/ui/AppSelect/ui/AppSelect/ui/AppSelect'
import * as Yup from 'yup'



import { Country, Currency } from '@/shared/const/common'
import { AppButton } from '@/shared/ui/AppButton'
import { AppSelect } from '@/shared/ui/AppSelect'
import { AppItem } from '@/shared/ui/AppSelect'
import { Avatar } from '@/shared/ui/Avatar'
import { Text } from '@/shared/ui/Text'
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

export const ProfileCard: FC<IProfileCard> = (props) => {
  const readonly = useSelector(getProfileIsReadonly)
  const { t } = useTranslation('profile')
  const {
    isLoading,
    data,
    error,
    className,
  } = props

  const profileCardClass = classNames(className, cls.profileCard, { [cls.readonly]: readonly })
  const loadingProfileCardClass = classNames(profileCardClass, cls.loading)

  const dispatch = useAppDispatch()

  // const [, , { setValue: setCurrency }] = useField('currency' || '')
  // const [, , { setValue: setCountry }] = useField('country' || '')

  if (isLoading) {
    return (
      <div className={loadingProfileCardClass}>
        <MyLoader />
      </div>
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
    <div className={profileCardClass}>
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
          // errors,
          // touched,
          // handleChange,
          // handleBlur,
          // handleSubmit,
          isSubmitting,
          resetForm
        }) => {


          return (
            <Form>
              <h2>Профиль</h2>
              <fieldset className={cls.content}>
                <legend>Персональные данные</legend>

                {values?.avatar && (
                  <div className={cls.avatarWrapper}>
                    <Avatar src={values?.avatar} alt="аватар пользователя"></Avatar>
                  </div>)
                }

                <li className={cls.inputWrapper}>
                  <label htmlFor="username">Username</label>
                  <Field
                    name="username"
                    id="username"
                    className={cls.gridInput}
                    readOnly={readonly}
                    type="text"
                  />
                  <ErrorMessage className={cls.gridError} name="username" component="div" />
                </li>

                <li className={cls.inputWrapper}>
                  <label htmlFor="firstname">First Name</label>
                  <Field
                    className={cls.gridInput}
                    readOnly={readonly}
                    id="firstName"
                    type="text"
                    name="firstname"
                    data-testid="ProfileCard.firstname"
                    placeholder="First Name"
                  />
                  <ErrorMessage className={cls.gridError} name="firstname" component="div" />
                </li>

                <li className={cls.inputWrapper}>
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    data-testid="ProfileCard.lastname"
                    className={cls.gridInput}
                    readOnly={readonly}
                    id="lastName"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                  />
                  <ErrorMessage className={cls.gridError} name="lastname" component="div" />
                </li>
                <li className={cls.inputWrapper}>
                  <label htmlFor="age">Age</label>
                  <Field
                    className={cls.gridInput}
                    readOnly={readonly}
                    id="age"
                    type="number"
                    name="age"
                    placeholder="Age"
                  />
                  <ErrorMessage className={cls.gridError} name="age" component="div" />
                </li>
              </fieldset>
              <fieldset className={cls.content}>
                <legend>Место жительсвта</legend>

                <li className={cls.inputWrapper}>
                  <AppSelectWithFormik
                    formikField={'country'}
                    label={'Country'}
                    id={'country'}
                    name={'country'}
                  >
                    <AppItem id={Country.Russia} textValue={Country.Russia}>{Country.Russia}</AppItem>
                    <AppItem id={Country.Kazakhstan} textValue={Country.Kazakhstan}>{Country.Kazakhstan}</AppItem>
                    <AppItem id={Country.Armenia} textValue={Country.Armenia}>{Country.Armenia}</AppItem>
                    <AppItem id={Country.Belarus} textValue={Country.Belarus}>{Country.Belarus}</AppItem>
                    <AppItem id={Country.Ukraine} textValue={Country.Ukraine}>{Country.Ukraine}</AppItem>
                  </AppSelectWithFormik>
                </li>

                <li className={cls.inputWrapper}>
                  <label htmlFor="city">City</label>
                  <Field className={cls.gridInput} readOnly={readonly} id="city" type="text" name="city"
                    placeholder="City" />
                  <ErrorMessage className={cls.gridError} name="city" component="div" />
                </li>

                <li className={cls.inputWrapper}>
                  <AppSelectWithFormik
                    formikField={'currency'}
                    label={'Currency'}
                    id={'currency'}
                    name={'currency'}
                  >
                    <AppItem id={Currency.USD} textValue={Currency.USD}>{Currency.USD}</AppItem>
                    <AppItem id={Currency.RUB} textValue={Currency.RUB}>{Currency.RUB}</AppItem>
                    <AppItem id={Currency.TNG} textValue={Currency.TNG}>{Currency.TNG}</AppItem>
                  </AppSelectWithFormik>
                </li>
              </fieldset>
              <div className={cls.buttonsWrapper}>
                <AppButton
                  type="button"
                  theme='outline'
                  data-testid="ProfileCard.ResetButton"
                  onPress={() => resetForm({ values: data })}
                >Reset
                </AppButton>
                <AppButton
                  data-testid="ProfileCard.SubmitButton"
                  type="submit"
                  theme='outline'
                  disabled={isSubmitting}
                >Submit
                </AppButton>
              </div>
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}
