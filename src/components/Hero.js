import React from 'react'
import { Container } from '@mui/material'
import { Box } from '@mui/material'
import { styled } from '@mui/system'
import Typography from '@mui/material/Typography'

import bgHero from '../images/hero.jpg'
import { BookBtn } from './BookBtn'

const StyledBackground = styled(Container, {
	name: 'StyledBackground',
	slot: 'Wrapper',
})({
	fontFamily: 'Josefin Sans',
	marginTop: '50px',
	padding: '25px',
	height: '500px',
	background: `url(${bgHero}) no-repeat center center fixed`,
	backgroundSize: 'cover',
	justifyContent: 'center',
	display: 'flex',
	alignItems: 'center',
	'@media (max-width:500px)': {
		background: `url(${bgHero}) no-repeat top center fixed`,
		height: '100%',
	},
})
export const Hero = () => {
	return (
		<StyledBackground>
			<Box style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
				<Typography
					variant='h4'
					align='center'
					sx={{ mb: 4, p: 5 }}
					style={{
						color: '#fff',
						textShadow: ' 5px 4px 5px #000',
						fontSize: '2rem',
						background: '#ccc0',
						boxShadow: '0px 0px 47px #cccccca6',
						borderRadius: '8px',
					}}>
					Illinois maids is a green cleaning company using natural Cleaning tools. We give a personal touch to every
					home, taking care of our customers' houses as if our own.
				</Typography>
				<BookBtn variant='contained' />
			</Box>
		</StyledBackground>
	)
}
