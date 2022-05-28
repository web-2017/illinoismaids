import { Routes, Route } from 'react-router-dom'

import HomeScreen from './Screens/HomeScreen'
import BookScreen from './Screens/BookScreen'
import './App.css'

export default function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<HomeScreen />} />
				<Route path='/book' element={<BookScreen />} />
			</Routes>
		</div>
	)
}
