import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from './provider/theme'
import App from 'App'

ReactDOM.render(
	<ThemeProvider>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById('root')
)