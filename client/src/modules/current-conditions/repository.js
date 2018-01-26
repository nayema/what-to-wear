import { camelizeKeys } from 'humps'

export async function loadCurrentConditions () {
  const response = await fetch('/current-conditions')
  const data = await response.json()
  return camelizeKeys(data)
}
