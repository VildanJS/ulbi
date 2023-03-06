import {Country, Currency} from 'shared/const/common'

export interface IProfile {
  'firstname': string,
  'lastname': string,
  'age': string,
  'city': string,
  'username': string,
  'avatar': string,
  'currency': Currency
  'country': Country
}

export interface ProfileSchema {
  data?: IProfile,
  isLoading: boolean,
  error?: string,
  readonly: boolean

}
