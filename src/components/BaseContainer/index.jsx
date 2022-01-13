import React, { useState, useEffect } from 'react'

import { getTheme } from '../../polices'

import './styles.css'

export default function BaseContainer(props) {
	const [classes, setClasses] = useState('base-container')
    
	useEffect(function () {
		const theme = getTheme(props.classTheme)

		setClasses(`${theme} base-container`)
	},[props.classTheme])

	return (
		<div className={classes}>
			{ props.children }
		</div>
	)
} 