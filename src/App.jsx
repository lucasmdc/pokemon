import React, { useContext } from 'react'
import Routes from './routes'

import BaseContainer from './components/BaseContainer'
import { ThemeContext } from './provider/theme'

import './assets/global.css'

const App = () => {
  const { name } = useContext(ThemeContext)

  return (
    <BaseContainer classTheme={name}>
      <Routes />
    </BaseContainer>
  )
}

export default App