import * as React from 'react'
import { Container, CssBaseline, Box, Paper } from '@mui/material'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Toolbar from '@mui/material/Toolbar'

import FeedbackForm from '../components/FeedbackForm'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Extras } from '../components/Extras/Extras'
import DescriptionComponent from '../components/DescriptionComponent'

import MainTitle from '../components/MainTitle'
import MainContainer from '../components/MainContainer'

import { extraData } from '../data'

function HomeScreen() {
	return (
		<>
			<MainContainer>
				<main>
					{/* Hero unit */}
					<Hero />

					<DescriptionComponent />
					<MainTitle style={{ margin: '20px' }} title='Services' />
					<Services />
					<MainTitle style={{ margin: '40px' }} title='Extras' />
					<Extras data={extraData} />
				</main>
				<MainTitle style={{ margin: '20px' }} title='Contact' />
				<FeedbackForm />
			</MainContainer>
		</>
	)
}
export default HomeScreen
