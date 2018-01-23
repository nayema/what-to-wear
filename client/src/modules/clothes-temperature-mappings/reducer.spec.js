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
    const changeNewSetOfClothesAction = actionCreators.changeNewSetOfClothes('Canada Goose, gloves')

    const nextState = reducer(undefined, changeNewSetOfClothesAction)

    expect(nextState).toHaveProperty('newSetOfClothes', 'Canada Goose, gloves')
  })

  it('returns previous state if not provided with a set of clothes', () => {
    const previousState = { clothesTemperatureMappings: [], newSetOfClothes: '', newMinTemp: 0, newMaxTemp: 10 }
    const newSetOfClothes = ''
    const addNewSetOfClothesAction = actionCreators.addNewSetOfClothes(newSetOfClothes)

    const nextState = reducer(previousState, addNewSetOfClothesAction)

    expect(nextState).toHaveProperty('clothesTemperatureMappings', [])
    expect(nextState).toHaveProperty('newSetOfClothes', '')
    expect(nextState).toHaveProperty('newMinTemp', 0)
    expect(nextState).toHaveProperty('newMaxTemp', 10)
  })

  it('adds new set of clothes to clothes temperature mappings list', () => {
    const previousState = { clothesTemperatureMappings: [], newSetOfClothes: '', newMinTemp: 0, newMaxTemp: 10 }
    const newSetOfClothes = 'Canada Goose, gloves'
    const addNewSetOfClothesAction = actionCreators.addNewSetOfClothes(newSetOfClothes)

    const nextState = reducer(previousState, addNewSetOfClothesAction)

    expect(nextState).toHaveProperty('clothesTemperatureMappings', [{ setOfClothes: 'Canada Goose, gloves' }])
    expect(nextState).toHaveProperty('newSetOfClothes', '')
    expect(nextState).toHaveProperty('newMinTemp', 0)
    expect(nextState).toHaveProperty('newMaxTemp', 10)
  })
})
