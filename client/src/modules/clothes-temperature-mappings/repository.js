import { camelizeKeys } from 'humps'

export async function loadAll () {
  const response = await fetch('/all')
  const data = await response.json()
  return camelizeKeys(data)
}

export async function addClothesTemperatureMapping (clothesTemperatureMapping) {
  const response = await fetch('/add', {
    method: 'post',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify(clothesTemperatureMapping)
  })
  const data = await response.json()
  return camelizeKeys(data)
}
