import { put, call } from 'redux-saga/effects'

import * as actionCreators from './action-creators'
import * as repository from './repository'

export function * loadAll () {
  const clothesTemperatureMappings = yield call(repository.getAll)
  yield put(actionCreators.loadAllSucceeded(clothesTemperatureMappings))
}
