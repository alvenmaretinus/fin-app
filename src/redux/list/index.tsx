import * as types from './types'

const initialState: types.State = {
  isEvenItemRefunded: false,
  items: [],
}

export default (state = initialState, action: types.Action): types.State => {
  switch (action.type) {
    case types.SET_ITEMS:
      return {
        ...state,
        items: action.payload.items,
      }
    case types.SET_REFUNDED:
      return {
        ...state,
        isEvenItemRefunded: action.payload.isRefunded,
      }
    default:
      return state
  }
}
