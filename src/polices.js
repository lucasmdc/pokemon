import charmander from './assets/images/charmander.png'
import squirtle from './assets/images/squirtle.png'
import bulbasaur from './assets/images/bulbasaur.png'
import pikachu from './assets/images/pikachu.png'

const themes = {
  charmander: 'fire-theme',
  squirtle: 'water-theme',
  bulbasaur: 'grass-theme',
  pikachu: 'lightning-theme'
}

const images = {
  charmander,
  squirtle,
  bulbasaur,
  pikachu
}

export const getTheme = name => {
  return themes[name] || ''
}

export const getImage = name => {
  return images[name] || ''
}
