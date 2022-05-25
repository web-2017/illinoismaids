import React from 'react'
import { Box, Container } from '@material-ui/core'
import { styled } from '@mui/system'
import Typography from '@mui/material/Typography'

import bg from '../images/2.jpg'
import { PHONE } from '../utils/constants'

const StyledBackground = styled(Container, {
	name: 'StyledBackground',
	slot: 'Wrapper',
})({
	fontFamily: 'Josefin Sans',
	marginTop: '50px',
	padding: '25px',
	height: '500px',
	background: `url(${bg})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: '100% 100%',
	backgroundAttachment: 'fixed',
})
export const Hero = () => {
	return (
		<StyledBackground
			sx={{
				bgcolor: 'background.paper',
				pt: 8,
				pb: 6,
			}}>
			<Container maxWidth='sm'>
				<Typography variant='h4'>Welcome to your ECO Home</Typography>
			</Container>
		</StyledBackground>
	)
}
