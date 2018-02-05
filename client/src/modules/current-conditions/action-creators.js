import { createAction } from 'redux-actions'

import * as actionTypes from './action-types'

export const loadCurrentConditionsSucceeded = createAction(
  actionTypes.LOAD_CURRENT_CONDITIONS_SUCCEEDED,
  (currentConditions) => (currentConditions)
)
