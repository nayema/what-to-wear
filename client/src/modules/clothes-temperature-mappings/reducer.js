import * as actionTypes from './action-types'

const initialState = {
  clothesTemperatureMappings: [],
  newSetOfClothes: '',
  newMinTemp: 0,
  newMaxTemp: 10
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_NEW_MIN_TEMP: {
      return {
        ...state,
        newMinTemp: action.payload.temperature
      }
    }
    case actionTypes.CHANGE_NEW_MAX_TEMP: {
      return {
        ...state,
        newMaxTemp: action.payload.temperature
      }
    }
    case actionTypes.CHANGE_NEW_SET_OF_CLOTHES: {
      return {
        ...state,
        newSetOfClothes: action.payload.clothes
      }
    }
    default:
      return state
  }
}

export default reducer
