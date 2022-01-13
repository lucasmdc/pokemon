import axios from 'axios'

const _api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
  headers: {
    'Cache-Control': 'no-cache'
  }
})

export default _api