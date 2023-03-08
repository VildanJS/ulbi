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
  data?: IProfile | null,
  isLoading: boolean,
  error?: string | null,
  readonly: boolean

}
