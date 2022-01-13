import React, { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

const initialState = {
	name: ''
}

function reducer (state, action) {
	switch (action.type) {
	case 'setName':
		return updateTheme(state, 'name', action.payload)
	default:
		return state
	}
}

function updateTheme (state, key, value) {
	return ({
		...state,
		[key]: value
	})
}

export const ThemeProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState)

    
	return (
		<ThemeContext.Provider value={{
			name: state.name,
			themeDispatch: dispatch
		}}>
			{ props.children }
		</ThemeContext.Provider>
	)
}