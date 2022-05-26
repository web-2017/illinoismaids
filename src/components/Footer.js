import React from 'react'
import { Box, Container, Typography, Link } from '@material-ui/core'
import { BRAND_NAME } from '../utils/constants'

export default function Footer() {
	const Copyright = () => {
		return (
			<Typography variant='body2'>
				{'Copyright © '}
				{/* <Link color='inherit' href='https://mui.com/'>
					Your Website
				</Link>{' '} */}
				{BRAND_NAME} {new Date().getFullYear()}
				{'.'}
			</Typography>
		)
	}
	return (
		<Box
			component='footer'
			sx={{
				py: 3,
				px: 2,
				mt: 'auto',
				backgroundColor: (theme) =>
					theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
			}}>
			<Container maxWidth='sm'>
				<Typography variant='body1'>We make your home Clean.</Typography>
				<Copyright />
			</Container>
		</Box>
	)
}
