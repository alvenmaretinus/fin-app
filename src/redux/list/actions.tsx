import axios from 'axios'
import { ThunkDispatch } from 'redux-thunk'
import * as types from './types'

export const getAndSetItems = () => async (
    dispatch: ThunkDispatch<types.State, undefined, types.SetItems>,
  ): Promise<void> => {
    const res = await axios.get('http://localhost:3000/items')
    if (res.status === 200) {
      dispatch(setItems(res.data))
    }
}

export const setItems = (items: object[]): types.SetItems => ({
  payload: {
    items,
  },
  type: types.SET_ITEMS,
})
