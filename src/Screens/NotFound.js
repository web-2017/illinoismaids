import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import MainContainer from '../components/MainContainer'
import MainTitle from '../components/MainTitle'
export default function NotFound() {
	return (
		<MainContainer>
			<Grid container direction='column' alignItems='center' justifyContent='center' style={{ minHeight: '100vh' }}>
				<Grid item xs={12}>
					<MainTitle title={'Sorry, Page not found'} />
				</Grid>
				<Grid item xs={12}>
					<Typography variant='h3' align='center'>
						<MainTitle title={'Go to'} />
						<Link to='/'>Home Page</Link>
					</Typography>
				</Grid>
			</Grid>
		</MainContainer>
	)
}
