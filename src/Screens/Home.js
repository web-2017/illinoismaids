import * as React from 'react'
import { Container, CssBaseline, Box, Paper } from '@mui/material'

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Toolbar from '@mui/material/Toolbar'

import AppBarComponent from '../components/AppBarComponent'
import ContactUs from '../components/Form'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Extras } from '../components/Extras/Extras'
import DescriptionComponent from '../components/DescriptionComponent'
import { ScrollToTopButton } from '../components/ScrollToTopButton'
import Footer from '../components/Footer'
import MainTitle from '../components/MainTitle'

import { extraData } from '../data'

function Home() {
	return (
		<>
			<Toolbar id='back-to-top-anchor' />
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100vh',
				}}>
				<CssBaseline />
				<Container>
					<AppBarComponent />
					<Paper elevation={0}>
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
						<ContactUs />
					</Paper>
					<ScrollToTopButton />
				</Container>

				<Footer />
			</Box>
		</>
	)
}
export default Home
