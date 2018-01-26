import * as actionTypes from './action-types'

export const loadCurrentConditionsSucceeded = (currentConditions) => ({
  type: actionTypes.LOAD_CURRENT_CONDITIONS_SUCCEEDED,
  payload: {
    currentConditions
  }
})
