import * as types from './types'

const initialState: types.State = {
  items: [],
}

export default (state = initialState, action: types.Action): types.State => {
  switch (action.type) {
    case types.SET_ITEMS:
      return {
        ...state,
        items: action.payload.items,
      }
    default:
      return state
  }
}
