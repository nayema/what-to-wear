import { fork, all } from 'redux-saga/effects'

import * as clothesTemperatureMappings from './clothes-temperature-mappings'
import * as currentConditions from './current-conditions'

export default function * rootSaga () {
  yield all([
    fork(clothesTemperatureMappings.sagas),
    fork(currentConditions.sagas)
  ])
}
