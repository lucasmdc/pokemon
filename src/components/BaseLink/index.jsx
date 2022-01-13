import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default function BaseLink(props) {
	return (
		<Link className="base-link" to={props.to ? props.to : '/'}> 
			<span className="base-link__box">
				<i className="base-link__icon"></i>
				<span className="base-link__text">{ props.children }</span>
			</span>
		</Link>
	)
}