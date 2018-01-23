import * as actionTypes from './action-types'

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

export const addNewSetOfClothes = (setOfClothes) => ({
  type: actionTypes.ADD_NEW_SET_OF_CLOTHES,
  payload: {
    clothes: {
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
