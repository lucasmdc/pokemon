import React, { useContext, useState } from 'react'

import BaseButton from '../../../../components/BaseButton'

import './styles.css'

import getRandomCharacter from '../../utils'
import { ThemeContext } from '../../../../provider/theme'


const ChooseCharacter = props => {
  const { themeDispatch } = useContext(ThemeContext)
  const [disable, setDisable] = useState(false)

  async function handleClick() {
    setDisable(true)
    const { name } = await getRandomCharacter()
            
    themeDispatch({type: 'setName', payload:name })
        
    setDisable(false)
        
    if (props.onAfterChooseCharacterDone) {
      props.onAfterChooseCharacterDone()
    }
        
  }

  return (
    <BaseButton 
      classes={[props.classes, 'character-details__play'].join(' ')} 
      onClick={ handleClick }
      disabled={disable}>
      { props.children }
    </BaseButton>
  )
}

export default ChooseCharacter