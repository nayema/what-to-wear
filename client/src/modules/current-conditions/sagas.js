import { put, call } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import * as repository from './repository'

export function * loadCurrentConditions () {
  const currentConditions = yield call(repository.loadCurrentConditions)
  yield put(actionCreators.loadCurrentConditionsSucceeded(currentConditions))
}

function * sagas () {
  yield all([
    fork(loadCurrentConditions)
  ])
}

export default sagas
