import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'

import rootReducer from './root.reducer'

const middlerwares = [logger]

export const store = createStore(rootReducer, applyMiddleware(...middlerwares))

// persistor
export const persistor = persistStore(store)
