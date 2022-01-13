import apiGetCharacterDetails from './api'

const getRandomCharacter = async () => {
  const getRandomCharacters = [
    apiGetCharacterDetails('charmander'),
    apiGetCharacterDetails('squirtle'),
    apiGetCharacterDetails('bulbasaur'),
    apiGetCharacterDetails('pikachu')
  ]

  try {
    const result = await Promise.race(getRandomCharacters)

    const name = result.data.name

    return {
      name
    }

  } catch (error) {
    throw error
  }
}

export default getRandomCharacter