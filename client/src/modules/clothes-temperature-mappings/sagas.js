import { put, call, take } from 'redux-saga/effects'

import * as actionTypes from './action-types'
import * as actionCreators from './action-creators'
import * as repository from './repository'

export function * loadAll () {
  const clothesTemperatureMappings = yield call(repository.loadAll)
  yield put(actionCreators.loadAllSucceeded(clothesTemperatureMappings))
}

export function * addClothesTemperatureMapping () {
  let action
  while (action = yield take(actionTypes.ADD_MAPPING_REQUESTED)) {
    const clothesTemperatureMapping = yield call(
      repository.addClothesTemperatureMapping,
      action.payload.clothesTemperatureMapping
    )
    yield put(actionCreators.addMappingSucceeded(clothesTemperatureMapping))
  }
}
