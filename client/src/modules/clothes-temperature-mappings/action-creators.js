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

export const changeNewSetOfClothes = (clothes) => ({
  type: actionTypes.CHANGE_NEW_SET_OF_CLOTHES,
  payload: {
    clothes
  }
})

export const addClothesTemperatureMapping = (minTemp, maxTemp, setOfClothes) => ({
  type: actionTypes.ADD_CLOTHES_TEMPERATURE_MAPPING,
  payload: {
    mapping: {
      minTemp,
      maxTemp,
      setOfClothes
    }
  }
})

export const deleteClothesTemperatureMapping = (setOfClothes) => ({
  type: actionTypes.DELETE_CLOTHES_TEMPERATURE_MAPPING,
  payload: {
    clothes: {
      setOfClothes
    }
  }
})
