import * as actionTypes from './action-types'

const initialState = {
  realFeelTemperature: ''
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_CURRENT_CONDITIONS_SUCCEEDED: {
      return {
        ...state,
        realFeelTemperature: action.payload.currentConditions.realFeelTemperature
      }
    }
    default:
      return state
  }
}

export default reducer
