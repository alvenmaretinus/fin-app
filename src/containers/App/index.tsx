import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAndSetItems } from '../../redux/list/actions'
import List from '../List'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAndSetItems())
  }, [])

  return (
    <div>
      <h1>Fin App.</h1>
      <List />
    </div>
  )
}

export default App
