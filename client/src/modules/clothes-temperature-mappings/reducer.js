import * as actionTypes from './action-types'

const initialState = {
  clothesTemperatureMappings: [],
  newMinTemp: 0,
  newMaxTemp: 10,
  newSetOfClothes: ''
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOAD_ALL_SUCCEEDED: {
      return {
        ...state,
        clothesTemperatureMappings: action.payload.clothesTemperatureMappings
      }
    }
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
    case actionTypes.ADD_CLOTHES_TEMPERATURE_MAPPING: {
      if (action.payload.mapping.setOfClothes === '') {
        return state
      }
      return {
        ...state,
        clothesTemperatureMappings: state.clothesTemperatureMappings.concat(action.payload.mapping),
        newSetOfClothes: '',
        newMinTemp: 0,
        newMaxTemp: 10
      }
    }
    case actionTypes.DELETE_CLOTHES_TEMPERATURE_MAPPING: {
      const oldMappings = state.clothesTemperatureMappings
      return {
        ...state,
        clothesTemperatureMappings: oldMappings.filter((mapping) =>
          mapping.setOfClothes !== action.payload.clothes.setOfClothes)
      }
    }
    default:
      return state
  }
}

export default reducer
