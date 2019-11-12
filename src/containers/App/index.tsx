import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import { RootReducer } from '../../redux'
import { setEvenItemsRefunded } from '../../redux/list/actions'
import { State as ListState } from '../../redux/list/types'
import List from '../List'

interface ButtonProps {
  isFilled: boolean,
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'PT Sans', sans-serif;
    font-size: 16px;
  }
`

const Wrapper = styled.div`
  width: 650px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`
const Header = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`

const Title = styled.h1`
  color: #1abc9c;
  font-size: 64px;
  margin-bottom: 8px;
`

const Button = styled.button`
  color: ${(props: ButtonProps) => props.isFilled ? 'white' : '#1abc9c'};
  background: ${(props: ButtonProps) => props.isFilled ? '#1abc9c' : 'white'};
  font-size: 18px;
  padding: 6px 12px;
  border-radius: 8px;
  border: 1px solid #1abc9c;
  outline: none;
  transition: color .2s, background .2s;
  cursor: pointer;
  :hover {
    color: ${(props: ButtonProps) => !props.isFilled ? 'white' : '#1abc9c'};
    background: ${(props: ButtonProps) => !props.isFilled ? '#1abc9c' : 'white'};
  }
`

const App = () => {
  const dispatch = useDispatch()
  const list: ListState = useSelector((state: RootReducer) => state.list)

  const onHeaderButtonClick = () => {
    dispatch(setEvenItemsRefunded())
  }

  const renderButtonText = () =>
    !list.isEvenItemRefunded ? 'Refund even-indexed items' : 'Cancel'

  return (
    <Wrapper>
      <GlobalStyle />
      <Header>
        <Title>Fin App.</Title>
        <Button
          type='button'
          onClick={onHeaderButtonClick}
          isFilled={list.isEvenItemRefunded}
        >
          {renderButtonText()}
        </Button>
      </Header>
      <List />
    </Wrapper>
  )
}

export default App
