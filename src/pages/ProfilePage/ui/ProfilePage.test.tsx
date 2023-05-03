import { screen } from '@testing-library/react'
import { withTranslation } from 'react-i18next'
import ProfilePage from './ProfilePage'
import '@/app/config/i18n/i18nForTest'
import { renderWithOptions } from '@/shared/utils/tests/renderWithOptions'
import { Country, Currency } from '@/shared/const/common'
import userEvent from '@testing-library/user-event'
import profileReducer from '@/features/profile/getProfileCardData'
import { IProfile } from '@/entities/Profile'


const data = {
  id: '1',
  firstname: 'Вильдан',
  lastname: 'Хабибов',
  age: '31',
  currency: Currency.TNG,
  country: Country.Kazakhstan,
  city: 'Oktyabrsky',
  username: 'admin',
  avatar: 'https://pic.rutubelist.ru/user/3b/27/3b2758ad5492a76b578f7ee072e4e894.jpg'
}


const profile: IProfile = {
  id: '1',
  firstname: 'admin',
  lastname: 'admin',
  age: '465',
  currency: Currency.USD,
  country: Country.Kazakhstan,
  city: 'Moscow',
  username: 'admin213',
}
const options = {
  initialState: {
    profile: {
      readonly: true,
      data: profile,
      isLoading: false
    },
    user: {
      authData: { id: '1', username: 'admin' },
    },
  },
  asyncReducers: {
    profile: profileReducer,
  },
}

describe('ProfilePage', () => {
  test('Cancel Button', async () => {
    const WithTranslationCard = withTranslation()(ProfilePage)
    renderWithOptions(<WithTranslationCard />, options)
    await userEvent.click(screen.getByTestId('ProfileCard.EditButton'))
    expect(screen.getByTestId('ProfileCard.CancelButton')).toBeInTheDocument()

    await userEvent.clear(screen.getByTestId('ProfileCard.lastname'))
    await userEvent.clear(screen.getByTestId('ProfileCard.firstname'))

    await userEvent.type(screen.getByTestId('ProfileCard.lastname'), 'user')
    await userEvent.type(screen.getByTestId('ProfileCard.firstname'), 'user')

    await userEvent.click(screen.getByTestId('ProfileCard.ResetButton'))
    expect(screen.getByTestId('ProfileCard.lastname')).toHaveValue('admin')
    expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('admin')

  })
})
