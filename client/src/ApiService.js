// ApiService => It's the responsible for requesting data from the API Server

const url = 'http://localhost:3005'

export async function getProducts () {
  const res = await fetch(url + '/products')
  if (res.status === 204) return res // this is in case there is no content
  else return res.json()
}
