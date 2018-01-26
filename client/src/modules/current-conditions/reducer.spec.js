import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toHaveProperty('realFeelTemperature', '')
  })

  it('loads real feel temperature', () => {
    const loadCurrentConditionsSucceededAction = actionCreators.loadCurrentConditionsSucceeded(7)

    const nextState = reducer(undefined, loadCurrentConditionsSucceededAction)

    expect(nextState).toHaveProperty('realFeelTemperature', 7)
  })
})
