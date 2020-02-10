import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './index'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const configStore = createStoreWithMiddleware(rootReducer)

export default configStore
