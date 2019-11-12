import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../redux'
import { getAndSetItems } from '../../redux/list/actions'
import { State as ListState } from '../../redux/list/types'
import ListItem from './components/ListItem'

const List = () => {
  const dispatch = useDispatch()
  const list: ListState = useSelector((state: RootReducer) => state.list)

  useEffect(() => {
    dispatch(getAndSetItems())
  }, [])

  return (
    <div>
      {list.items.map(({
        id,
        merchantId,
        initiatorDetails: { contactEmail, contactName },
        currency,
        amount,
        history,
      }) => (
        <ListItem
          key={id}
          transactionId={id}
          merchantId={merchantId}
          customerEmail={contactEmail}
          customerName={contactName}
          currency={currency}
          amount={amount}
          history={history}
        />
      ))}
    </div>
  )
}

export default List
