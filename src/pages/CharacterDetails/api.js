import api from '../../services/api'

const getCharacterDetails = (id) => {
  return api.get(`pokemon/${id}`)
}

export default getCharacterDetails