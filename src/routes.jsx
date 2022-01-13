import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import CharacterDetail from 'pages/CharacterDetails'
import Home from 'pages/Home'

const routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route component={Home} path="/" exact />
      <Route component={CharacterDetail} path="/character-details" />
    </BrowserRouter>
  )
}

export default routes