import * as React from 'react'
import { useEffect, useState } from 'react'
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

const EmptyText = styled.div`
  margin-top: 16px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.7);
`

const List = () => {
  const dispatch = useDispatch()
  const list: ListState = useSelector((state: RootReducer) => state.list)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    dispatch(
      getAndSetItems(
        () => setIsLoaded(true),
      ),
    )
  }, [])

  if (isLoaded && list.items.length === 0) {
    return (
      <EmptyText>
        No transactions yet.<br />
        Make sure <b>db.json</b> exists and run <b>yarn db</b> to start mock API server.
      </EmptyText>
    )
  }

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
