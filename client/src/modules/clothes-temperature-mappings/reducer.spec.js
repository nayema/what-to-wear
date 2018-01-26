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

  it('loads into clothesTemperatureMapping temperature mappings list', () => {
    const loadAllSucceededAction = actionCreators.loadAllSucceeded(
      [{ id: 1, minTemp: 0, maxTemp: 10, setOfClothes: 'Some set of clothes' }]
    )

    const nextState = reducer(undefined, loadAllSucceededAction)

    expect(nextState).toHaveProperty(
      'clothesTemperatureMappings',
      [{ id: 1, minTemp: 0, maxTemp: 10, setOfClothes: 'Some set of clothes' }]
    )
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

  it('changes new set of clothesTemperatureMapping', () => {
    const changeNewSetOfClothesAction = actionCreators.changeNewSetOfClothes('Some set of clothes')

    const nextState = reducer(undefined, changeNewSetOfClothesAction)

    expect(nextState).toHaveProperty('newSetOfClothes', 'Some set of clothes')
  })

  it('adds clothes temperature mapping when succeeded', () => {
    const previousState = {
      clothesTemperatureMappings: [],
      newMinTemp: 0,
      newMaxTemp: 10,
      newSetOfClothes: ''
    }
    const clothesTemperatureMapping = {
      minTemp: 1,
      maxTemp: 11,
      setOfClothes: 'Some set of clothes'
    }
    const addClothesTemperatureMappingAction = actionCreators.addMappingSucceeded(clothesTemperatureMapping)

    const nextState = reducer(previousState, addClothesTemperatureMappingAction)

    expect(nextState).toHaveProperty(
      'clothesTemperatureMappings',
      [{ minTemp: 1, maxTemp: 11, setOfClothes: 'Some set of clothes' }]
    )
    expect(nextState).toHaveProperty('newMinTemp', 0)
    expect(nextState).toHaveProperty('newMaxTemp', 10)
    expect(nextState).toHaveProperty('newSetOfClothes', '')
  })

  it('deletes a clothesTemperatureMapping temperature clothesTemperatureMapping row from clothesTemperatureMapping temperature mappings list', () => {
    const previousState = { clothesTemperatureMappings: [{ setOfClothes: 'Some set of clothesTemperatureMapping' }] }
    const deleteClothesTemperatureMappingAction = actionCreators.deleteClothesTemperatureMapping('Some set of clothesTemperatureMapping')

    const nextState = reducer(previousState, deleteClothesTemperatureMappingAction)

    expect(nextState).toHaveProperty('clothesTemperatureMappings', [])
  })
})
