import React, { useContext, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { ThemeContext } from '../../provider/theme'

import ChooseCharacter from '../CharacterDetails/components/ChooseCharacter'
import './styles.css'

import pokemon from '../../assets/images/pokemon.jpg'

const Home = () => {
	const { themeDispatch } = useContext(ThemeContext)
	const history = useHistory()
	const location = useLocation()

	function handleOnAfterChooseCharacterDone() {
		history.push('/character-details')
	}

	useEffect(function () {
		themeDispatch({ type: 'setName', payload: '' })
	}, [location, themeDispatch])

	return (
		<section className="home">
			<div className="home__greetings">
				<div className="home__greetings__box">
					<div className="home__title">
						<span>Welcome to </span>
						<h1 className="home__brand">Pokémon</h1>
					</div>
					<img src={pokemon}
						alt="pokémon - primeira geração"
					/>
					<h4 className="home__subtitle">KNOW WHAT WILL BE YOURS</h4>
				</div>
				<ChooseCharacter
					classes="home__start"
					onAfterChooseCharacterDone={handleOnAfterChooseCharacterDone}
				>
					S T A R T
				</ChooseCharacter>
			</div>
		</section>
	)
}

export default Home