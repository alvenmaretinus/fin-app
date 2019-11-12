export const SET_ITEMS = 'SET_ITEMS'
export type SET_ITEMS = typeof SET_ITEMS

export const SET_REFUNDED = 'SET_REFUNDED'
export type SET_REFUNDED = typeof SET_REFUNDED

export interface State {
  isEvenItemRefunded: boolean,
  items: ListItem[],
}

export interface HistoryDetail {
  state: string,
  updatedDate: string,
  trigger: string,
}

export interface ListItem {
  id: string,
  merchantId: string,
  initiatorDetails: {
    contactEmail: string,
    contactName: string,
  },
  currency: string,
  amount: number,
  history: HistoryDetail[]
}

export interface SetItems {
  type: SET_ITEMS,
  payload: {
    items: ListItem[],
  }
}

export interface SetEvenItemRefunded {
  type: SET_REFUNDED,
  payload: {
    isRefunded: boolean,
  },
}

export type Action = SetItems | SetEvenItemRefunded
