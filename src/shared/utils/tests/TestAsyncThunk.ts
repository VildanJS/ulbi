/* eslint-disable @typescript-eslint/no-explicit-any*/
import { AsyncThunkAction } from '@reduxjs/toolkit'
import axios, { AxiosStatic } from 'axios'

import { StateSchema } from '@/app/providers/StoreProvider'

type ActionCreatorType<Return, Arg, RejectedValue>
  = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

jest.mock('axios')

const mockedAxios = jest.mocked(axios)

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>
  api: jest.MockedFunctionDeep<AxiosStatic>


  constructor (actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()

    this.api = mockedAxios
  }

  async callThunk (arg: Arg) {
    const action = this.actionCreator(arg)
    return await action(
      this.dispatch,
      this.getState,
      {
        api: this.api
      },
    )
  }
}
