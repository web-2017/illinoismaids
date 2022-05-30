import React from 'react'
import { Box, Container, Typography } from '@material-ui/core'

import { BRAND_NAME } from '../../utils/constants'
import FooterLinks from './FooterLinks'

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
			}}>
			<Container maxWidth='sm'>
				<FooterLinks />
				<Typography variant='body1'>We make your place clean.</Typography>
				<Copyright />{' '}
			</Container>
		</Box>
	)
}
