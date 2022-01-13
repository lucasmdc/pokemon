import React, { useState, useContext, useEffect } from 'react'
import { ThemeContext } from '../../provider/theme'

import { useHistory } from 'react-router-dom'

import BaseLink from 'components/BaseLink'
import ChooseCharacter from './components/ChooseCharacter'

import { getImage } from '../../polices'

import './styles.css'

const CharacterDetail = () => {
	const { name } = useContext(ThemeContext)
	const [imageUrl, setImageUrl] = useState('')
	const history = useHistory()

	useEffect(function () {
		let imageUrl = getImage(name)

		setImageUrl(imageUrl)
	}, [name])

	useEffect(function () {
		if (history.action === 'POP') {
			history.push('/')
		}
	}, [history])

	return (
		<section className="character-details">
			<header className="character-details__header-page">
				<BaseLink>back</BaseLink>
			</header>
			<article className="character-details__content-page">
				<figure className="character-details__character">
					<img
						className="character-details__character__image"
						src={imageUrl}
						alt={name}
					/>
					<figcaption className="character-details__character__description">
						Your pokemon is <strong>{name}</strong>
					</figcaption>
				</figure>
				<ChooseCharacter>Choose your pokemon again</ChooseCharacter>
			</article>
		</section>
	)
}

export default CharacterDetail 