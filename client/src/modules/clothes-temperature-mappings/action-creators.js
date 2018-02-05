import { createAction } from 'redux-actions'

import * as actionTypes from './action-types'

export const loadAllSucceeded = createAction(
  actionTypes.LOAD_ALL_SUCCEEDED,
  clothesTemperatureMappings => clothesTemperatureMappings
)

export const changeNewMinTemp = createAction(
  actionTypes.CHANGE_NEW_MIN_TEMP,
  temperature => temperature
)

export const changeNewMaxTemp = createAction(
  actionTypes.CHANGE_NEW_MAX_TEMP,
  temperature => temperature
)

export const changeNewSetOfClothes = createAction(
  actionTypes.CHANGE_NEW_SET_OF_CLOTHES,
  newSetOfClothes => newSetOfClothes
)

export const addMappingRequested = createAction(
  actionTypes.ADD_MAPPING_REQUESTED,
  (minTemp, maxTemp, setOfClothes) => (minTemp, maxTemp, setOfClothes)
)

export const addMappingSucceeded = createAction(
  actionTypes.ADD_MAPPING_SUCCEEDED,
  clothesTemperatureMapping => clothesTemperatureMapping
)
