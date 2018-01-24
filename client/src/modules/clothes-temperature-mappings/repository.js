import { camelizeKeys } from 'humps'

export async function getAll () {
  const response = await fetch('/all')
  const data = await response.json()
  return camelizeKeys(data)
}
