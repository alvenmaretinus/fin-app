import axios from 'axios'
import { ThunkDispatch } from 'redux-thunk'
import { RootReducer } from '..'
import * as types from './types'

export const getAndSetItems = (callback: () => void) => async (
    dispatch: ThunkDispatch<types.State, undefined, types.SetItems>,
  ): Promise<void> => {
    try {
      const res = await axios.get('http://localhost:3000/items')
      dispatch(setItems(res.data))
    } finally {
      callback()
    }
}

export const setEvenItemsRefunded = () => async (
  dispatch: ThunkDispatch<
    types.State,
    undefined,
    types.SetItems | types.SetEvenItemRefunded
  >,
  getState: () => RootReducer,
): Promise<void> => {
  const { list } = getState()
  let newListItem = []

  if (!list.isEvenItemRefunded) {
    newListItem = list.items.map((item, index) => {
      if (index % 2 === 0) {
        item.history.push({
          state: 'REFUNDED',
          trigger: 'MANUAL',
          updatedDate: new Date().toISOString(),
        })
      }
      return item
    })
    dispatch(setEvenItemRefunded(true))
  } else {
    newListItem = list.items.map((item, index) => {
      if (index % 2 === 0) {
        item.history.pop()
      }
      return item
    })
    dispatch(setEvenItemRefunded(false))
  }
  dispatch(setItems(newListItem))
}

export const setItems = (items: types.ListItem[]): types.SetItems => ({
  payload: {
    items,
  },
  type: types.SET_ITEMS,
})

export const setEvenItemRefunded = (
  isRefunded: boolean,
): types.SetEvenItemRefunded => ({
  payload: {
    isRefunded,
  },
  type: types.SET_REFUNDED,
})
