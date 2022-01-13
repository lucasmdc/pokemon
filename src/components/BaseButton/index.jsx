import React from 'react'

import './styles.css'

export default function BaseButton(props) {
	function handleClick(ev) {
		props.onClick(ev)
	}

	return (
		<button 
			className={ `base-button ${props.classes}` }
			onClick={ handleClick }
			disabled={props.disabled}
		>{ props.children }</button>
	)
}