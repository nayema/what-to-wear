import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  clothesTemperatureMappings: [],
  newMinTemp: 0,
  newMaxTemp: 10,
  newSetOfClothes: ''
}

const reducer = handleActions({
  [actionTypes.LOAD_ALL_SUCCEEDED]: (state, action) => ({
    ...state,
    clothesTemperatureMappings: action.payload
  }),
  [actionTypes.CHANGE_NEW_MIN_TEMP]: (state, action) => ({
    ...state,
    newMinTemp: action.payload
  }),
  [actionTypes.CHANGE_NEW_MAX_TEMP]: (state, action) => ({
    ...state,
    newMaxTemp: action.payload
  }),
  [actionTypes.CHANGE_NEW_SET_OF_CLOTHES]: (state, action) => ({
    ...state,
    newSetOfClothes: action.payload
  }),
  [actionTypes.ADD_MAPPING_SUCCEEDED]: (state, action) => ({
    ...state,
    clothesTemperatureMappings: state.clothesTemperatureMappings.concat(action.payload),
    newMinTemp: 0,
    newMaxTemp: 10,
    newSetOfClothes: ''
  })
}, initialState)

// function reducer (state = initialState, action) {
//   switch (action.type) {
//     case actionTypes.ADD_MAPPING_SUCCEEDED: {
//       const oldMappings = state.clothesTemperatureMappings
//       return {
//         ...state,
//         clothesTemperatureMappings: oldMappings.concat(action.payload.clothesTemperatureMapping),
//         newSetOfClothes: '',
//         newMinTemp: 0,
//         newMaxTemp: 10
//       }
//     }
//     case actionTypes.DELETE_CLOTHES_TEMPERATURE_MAPPING: {
//       const oldMappings = state.clothesTemperatureMappings
//       return {
//         ...state,
//         clothesTemperatureMappings: oldMappings.filter((mapping) =>
//           mapping.setOfClothes !== action.payload.clothesTemperatureMapping.setOfClothes)
//       }
//     }
//     default:
//       return state
//   }
// }

export default reducer
