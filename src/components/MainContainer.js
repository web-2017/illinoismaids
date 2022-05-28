import React from 'react'
import { Container, CssBaseline, Box, Paper } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'

import AppBarComponent from './AppBarComponent'
import { ScrollToTopButton } from './ScrollToTopButton'
import Footer from './Footer'

export default function MainContainer({ children }) {
	return (
		<Box sx={{ marginTop: { xs: '0', md: '20px' } }}>
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
					{children}
				</Container>
				<ScrollToTopButton id='#back-to-top-anchor' />
			</Box>
			<Footer />
		</Box>
	)
}
