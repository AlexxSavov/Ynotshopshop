import { applyMiddleware, compose, createStore } from 'redux'

import rootReducer from './reducers'

export default function configureStore(preloadedState) {
  const composedEnhancers = 
    (process.env.NODE_ENV !== 'production' &&
     typeof window !== 'undefined' &&
     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
     compose
  

  const store = createStore(rootReducer, preloadedState, composedEnhancers(applyMiddleware()))

  return store
}