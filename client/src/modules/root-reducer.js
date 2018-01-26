import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import * as clothesTemperatureMappings from './clothes-temperature-mappings'
import * as currentConditions from './current-conditions'

export default combineReducers({
  routing: routerReducer,
  clothesTemperatureMappings: clothesTemperatureMappings.reducer,
  currentConditions: currentConditions.reducer
})
