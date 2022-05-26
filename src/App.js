import { Routes, Route, Link } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'

import { theme } from './utils/theme'
import Home from './Screens/Home'
import './App.css'

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<Routes>
					<Route path='/' element={<Home />} />
					{/* <Route path='about' element={<About />} /> */}
				</Routes>
			</div>
		</ThemeProvider>
	)
}
