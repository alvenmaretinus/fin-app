import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import List from '../List'

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

const Title = styled.h1`
  color: #1abc9c;
  font-size: 64px;
  margin-bottom: 8px;
`

const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Title>Fin App.</Title>
      <List />
    </Wrapper>
  )
}

export default App
