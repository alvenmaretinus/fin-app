export const SET_ITEMS = 'SET_ITEMS'
export type SET_ITEMS = typeof SET_ITEMS
export interface State {
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

export type Action = SetItems
