import { handleActions } from 'redux-actions'

import * as actionTypes from './action-types'

const initialState = {
  realFeelTemperature: ''
}

const reducer = handleActions({
  [actionTypes.LOAD_CURRENT_CONDITIONS_SUCCEEDED]: (state, action) => ({
    ...state,
    realFeelTemperature: action.payload.realFeelTemperature
  })
}, initialState)

export default reducer
