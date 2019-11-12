import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { State as ListState } from '../redux/list/types'
import listReducer from './list'

export interface RootReducer {
  list: ListState,
}

const rootReducer = combineReducers({
  list: listReducer,
})

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
)
