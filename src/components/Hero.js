import React from 'react'
import { Container } from '@material-ui/core'
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
	background: `url(${bgHero}) no-repeat top center fixed`,
	backgroundSize: 'contain',
	justifyContent: 'center',
	display: 'flex',
	alignItems: 'center',
})
export const Hero = () => {
	return (
		<StyledBackground>
			<Box style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
				<Typography
					variant='h4'
					align='center'
					sx={{ pb: 4 }}
					style={{ color: '#fff', textShadow: ' 5px 4px 5px #000' }}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus quo delectus, hic autem laborum nam aut
					dolor impedit debitis asperiores?
				</Typography>
				<BookBtn variant='contained' />
			</Box>
		</StyledBackground>
	)
}
