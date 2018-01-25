import * as actionTypes from './action-types'

export const loadAllSucceeded = (clothesTemperatureMappings) => ({
  type: actionTypes.LOAD_ALL_SUCCEEDED,
  payload: {
    clothesTemperatureMappings
  }
})

export const changeNewMinTemp = (temperature) => ({
  type: actionTypes.CHANGE_NEW_MIN_TEMP,
  payload: {
    temperature
  }
})

export const changeNewMaxTemp = (temperature) => ({
  type: actionTypes.CHANGE_NEW_MAX_TEMP,
  payload: {
    temperature
  }
})

export const changeNewSetOfClothes = (newSetOfClothes) => ({
  type: actionTypes.CHANGE_NEW_SET_OF_CLOTHES,
  payload: {
    newSetOfClothes
  }
})

export const addMappingRequested = (minTemp, maxTemp, setOfClothes) => ({
  type: actionTypes.ADD_MAPPING_REQUESTED,
  payload: {
    clothesTemperatureMapping: {
      minTemp,
      maxTemp,
      setOfClothes
    }
  }
})

export const addMappingSucceeded = (clothesTemperatureMapping) => ({
  type: actionTypes.ADD_MAPPING_SUCCEEDED,
  payload: {
    clothesTemperatureMapping
  }
})

export const deleteClothesTemperatureMapping = (setOfClothes) => ({
  type: actionTypes.DELETE_CLOTHES_TEMPERATURE_MAPPING,
  payload: {
    clothesTemperatureMapping: {
      setOfClothes
    }
  }
})
