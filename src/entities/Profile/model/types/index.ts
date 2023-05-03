import { Country, Currency } from '@/shared/const/common'

export interface IProfile {
  id?: string,
  'firstname'?: string,
  'lastname'?: string,
  'age'?: string,
  'city'?: string,
  'username'?: string,
  'avatar'?: string,
  'currency'?: Currency
  'country'?: Country
}
