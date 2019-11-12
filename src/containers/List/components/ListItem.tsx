import * as React from 'react'
import { HistoryDetail } from '../../../redux/list/types'

interface Props {
  transactionId: string,
  merchantId: string,
  customerEmail: string,
  customerName: string,
  currency: string,
  amount: number,
  history: HistoryDetail[],
}

const ListItem = (props: Props) => {
  const {
    transactionId,
    merchantId,
    customerEmail,
    customerName,
    currency,
    amount,
    history,
  } = props
  return (
    <div>
      <div>Transaction ID: {transactionId}</div>
      <div>Merchant ID: {merchantId}</div>
      <div>customerEmail: {customerEmail}</div>
      <div>customerName: {customerName}</div>
      <div>currency: {currency}</div>
      <div>amount: {amount}</div>
      <div>
        {history.map(({ state, updatedDate, trigger }) => (
          <div key={state}>
            <br/>
            <div>{state}</div>
            <div>{updatedDate}</div>
            <div>{trigger}</div>
          </div>
        ))}
      </div>
      <br/>
      <br/>
    </div>
  )
}

export default ListItem
