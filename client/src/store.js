import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'
import createHistory from 'history/createBrowserHistory'

import rootReducer from './modules/root-reducer'
import * as clothesTemperatureMappings from './modules/clothes-temperature-mappings'
import * as currentConditions from './modules/current-conditions'

const sagaMiddleware = createSagaMiddleware()
export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  sagaMiddleware,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
)

sagaMiddleware.run(clothesTemperatureMappings.sagas.loadAll)
sagaMiddleware.run(clothesTemperatureMappings.sagas.addClothesTemperatureMapping)
sagaMiddleware.run(currentConditions.sagas.loadCurrentConditions)

export default store
