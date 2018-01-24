import { camelizeKeys } from 'humps'

export async function getAll () {
  const response = await fetch('http://localhost:3000/all/')
  const data = await response.json()
  return camelizeKeys(data)
}
