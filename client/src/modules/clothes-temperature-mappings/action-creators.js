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
