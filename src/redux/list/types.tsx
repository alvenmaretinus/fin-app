export const SET_ITEMS = 'SET_ITEMS'
export type SET_ITEMS = typeof SET_ITEMS

export interface State {
  items: object[]
}

export interface SetItems {
  type: SET_ITEMS
  payload: {
    items: object[],
  }
}

export type Action = SetItems
