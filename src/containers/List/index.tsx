import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { RootReducer } from '../../redux'
import { getAndSetItems } from '../../redux/list/actions'
import { State as ListState } from '../../redux/list/types'
import ListItem from './components/ListItem'

const Wrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  width: calc(100% + 32px);
  margin-left: -16px;
`

const List = () => {
  const dispatch = useDispatch()
  const list: ListState = useSelector((state: RootReducer) => state.list)

  useEffect(() => {
    dispatch(getAndSetItems())
  }, [])

  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default List
