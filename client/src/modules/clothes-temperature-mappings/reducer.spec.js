import * as actionCreators from './action-creators'
import reducer from './reducer'

describe('reducer', () => {
  it('returns the initial state if not provided with a state', () => {
    const initialAction = { type: 'XXXXXX' }

    const nextState = reducer(undefined, initialAction)

    expect(nextState).toHaveProperty('clothesTemperatureMappings', [])
    expect(nextState).toHaveProperty('newSetOfClothes', '')
    expect(nextState).toHaveProperty('newMinTemp', 0)
    expect(nextState).toHaveProperty('newMaxTemp', 10)
  })

  it('changes new minimum temperature', () => {
    const changeNewMinTempAction = actionCreators.changeNewMinTemp(0)

    const nextState = reducer(undefined, changeNewMinTempAction)

    expect(nextState).toHaveProperty('newMinTemp', 0)
  })

  it('changes new maximum temperature', () => {
    const changeNewMaxTempAction = actionCreators.changeNewMaxTemp(100)

    const nextState = reducer(undefined, changeNewMaxTempAction)

    expect(nextState).toHaveProperty('newMaxTemp', 100)
  })

  it('changes new set of clothes', () => {
    const changeNewSetOfClothesAction = actionCreators.changeNewSetOfClothes('Some set of clothes')

    const nextState = reducer(undefined, changeNewSetOfClothesAction)

    expect(nextState).toHaveProperty('newSetOfClothes', 'Some set of clothes')
  })

  it('returns previous state if not provided with a set of clothes', () => {
    const previousState = { clothesTemperatureMappings: [], newMinTemp: 0, newMaxTemp: 10, newSetOfClothes: '' }
    const newSetOfClothes = ''
    const addClothesTemperatureMappingAction = actionCreators.addClothesTemperatureMapping(
      previousState.newMinTemp,
      previousState.newMaxTemp,
      newSetOfClothes
    )

    const nextState = reducer(previousState, addClothesTemperatureMappingAction)

    expect(nextState).toHaveProperty('clothesTemperatureMappings', [])
    expect(nextState).toHaveProperty('newMinTemp', 0)
    expect(nextState).toHaveProperty('newMaxTemp', 10)
    expect(nextState).toHaveProperty('newSetOfClothes', '')
  })

  it('adds new clothes temperature mapping to the state', () => {
    const previousState = {
      clothesTemperatureMappings: [],
      newMinTemp: 0,
      newMaxTemp: 10,
      newSetOfClothes: 'Some set of clothes'
    }
    const addClothesTemperatureMappingAction = actionCreators.addClothesTemperatureMapping(
      previousState.newMinTemp,
      previousState.newMaxTemp,
      previousState.newSetOfClothes
    )

    const nextState = reducer(previousState, addClothesTemperatureMappingAction)

    expect(nextState).toHaveProperty(
      'clothesTemperatureMappings',
      [{ minTemp: 0, maxTemp: 10, setOfClothes: 'Some set of clothes' }]
    )
    expect(nextState).toHaveProperty('newMinTemp', 0)
    expect(nextState).toHaveProperty('newMaxTemp', 10)
    expect(nextState).toHaveProperty('newSetOfClothes', '')
  })

  it('deletes a clothes temperature mapping row from clothes temperature mappings list', () => {
    const previousState = { clothesTemperatureMappings: [{ setOfClothes: 'Some set of clothes' }] }
    const deleteClothesTemperatureMappingAction = actionCreators.deleteClothesTemperatureMapping('Some set of clothes')

    const nextState = reducer(previousState, deleteClothesTemperatureMappingAction)

    expect(nextState).toHaveProperty('clothesTemperatureMappings', [])
  })
})
