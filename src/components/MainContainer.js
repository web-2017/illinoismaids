import React from 'react'
import { Container, CssBaseline, Box } from '@mui/material'
import Toolbar from '@mui/material/Toolbar'

import AppBarComponent from './AppBarComponent'
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
				<Container sx={{ paddingLeft: { xs: '10px' }, paddingRight: { xs: '10px' } }}>
					<AppBarComponent />
					{children}
				</Container>
			</Box>
			<Footer />
		</Box>
	)
}
