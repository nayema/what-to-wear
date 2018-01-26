export async function loadCurrentConditions () {
  const response = await fetch('/current-conditions')
  return response.json()
}
