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
        newSetOfClothes: action.payload.newSetOfClothes
      }
    }
    case actionTypes.ADD_MAPPING_SUCCEEDED: {
      const oldMappings = state.clothesTemperatureMappings
      return {
        ...state,
        clothesTemperatureMappings: oldMappings.concat(action.payload.clothesTemperatureMapping),
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
          mapping.setOfClothes !== action.payload.clothesTemperatureMapping.setOfClothes)
      }
    }
    default:
      return state
  }
}

export default reducer
