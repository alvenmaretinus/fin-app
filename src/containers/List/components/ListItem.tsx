import * as moment from 'moment'
import * as React from 'react'
import styled from 'styled-components'
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

const Wrapper = styled.div`
  padding: 16px;
  border-radius: 8px;
  background: white;
  box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  :not(:last-child) {
    margin-bottom: 16px;
  }
`

const IdText = styled.div`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.4);
`

const DetailText = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.7);
  :not(:last-child) {
    margin-bottom: 4px;
  }
`

const DetailWrapper = styled.div`
  margin-top: 16px;
`


const CurrencyText = styled.div`
  color: rgba(0, 0, 0, 0.4);
  font-size: 32px;
  margin-right: 8px;
  `

const AmountWrapper = styled.div`
  display: flex;
  align-items: baseline;
  margin-left: auto;
`

const AmountText = styled.div`
  font-size: 64px;
  color: rgba(0, 0, 0, 0.8);
`

const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: rgba(0, 0, 0, 0.7);
  padding-top: 12px;
  > b {
    color: #1abc9c;
    font-size: 32px;
  }
`

const BottomWrapper = styled.div`
  display: flex;
  margin-bottom: -16px;
`

const formatDate = (date: string) => moment(date).format('MMMM Do YYYY, h:mm:ss a')

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
    <Wrapper>
      <IdText>Transaction ID: <b>{transactionId}</b></IdText>
      <IdText>Merchant ID: <b>{merchantId}</b></IdText>
      <DetailWrapper>
        <DetailText>
          Transaction Time:
          <b>{formatDate(history[0].updatedDate)}</b>
        </DetailText>
        <DetailText>Customer Email: <b>{customerEmail}</b></DetailText>
        <DetailText>Customer Name: <b>{customerName}</b></DetailText>
        <BottomWrapper>
          <StatusWrapper>
            <span>Status:</span>
            <b>{history[history.length - 1].state}</b>
          </StatusWrapper>
          <AmountWrapper>
            <CurrencyText>{currency}</CurrencyText>
            <AmountText>{amount}</AmountText>
          </AmountWrapper>
        </BottomWrapper>
      </DetailWrapper>
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
    </Wrapper>
  )
}

export default ListItem
