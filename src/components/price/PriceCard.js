import { Box, Grid, Typography } from '@mui/material'
// import FormGroup from '@mui/material/FormGroup'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import Switch from '@mui/material/Switch'

export const PriceCard = () => {
	// const label = { inputProps: { 'aria-label': 'Switch demo' } }
	// const [labelText, setLabelText] = useState('Weekly')
	return (
		<>
			{/* <Box sx={{ textAlign: 'center' }}>
				<FormGroup>
					<FormControlLabel
						style={{ justifyContent: 'center' }}
						control={<Switch {...label} defaultChecked color='warning' />}
						label={labelText}
						onChange={(e) => setLabelText(e.target.checked ? 'Weekly' : 'Once')}
					/>
				</FormGroup>
			</Box> */}

			<Box mb={2}>
				<Typography variant='body1' align='center'>
					Valid for recurring bi-weekly cleanings Monthly Cleanings have an additional 15% fee Weekly Cleanings
					Available with 10% Discount If you have heavily shedding pets, there will be an additional 15% charge. Move in
					and move out cleanings as well as deep cleanings are 2.7 times the bi-weekly price
				</Typography>
			</Box>

			<Grid container spacing={2} justifyContent='space-between'>
				<Grid sm={12} md={2} item={true} sx={{ textAlign: 'center' }} p={1}>
					<Typography variant='h4'>1 bed + 1 bath</Typography>
					<Typography variant='h6'>From 85$</Typography>
				</Grid>
				<Grid sm={12} md={2} item={true} sx={{ textAlign: 'center' }}>
					<Typography variant='h4'>2 bed</Typography>
					<Typography variant='h6'>1 bath 99$</Typography>
					<Typography variant='h6'>1.5 bath 110$</Typography>
					<Typography variant='h6'>2 bath 129$</Typography>
					<Typography variant='h6'>2.5 bath 135$</Typography>
				</Grid>
				<Grid sm={12} md={2} item={true} sx={{ textAlign: 'center' }}>
					<Typography variant='h4'>3 bed</Typography>
					<Typography variant='h6'>1 bath 115$</Typography>
					<Typography variant='h6'>1.5 bath 125$</Typography>
					<Typography variant='h6'>2 bath 150$</Typography>
					<Typography variant='h6'>2.5 bath 168$</Typography>
				</Grid>
				<Grid sm={12} md={2} item={true} sx={{ textAlign: 'center' }}>
					<Typography variant='h4'>3 bed</Typography>
					<Typography variant='h6'>1 bath 115$</Typography>
					<Typography variant='h6'>1.5 bath 125$</Typography>
					<Typography variant='h6'>2 bath 135$</Typography>
					<Typography variant='h6'>2.5 bath 150$</Typography>
					<Typography variant='h6'>3 bath 160$</Typography>
					<Typography variant='h6'>3.5 bath 165$</Typography>
				</Grid>
				<Grid sm={12} md={2} item={true} sx={{ textAlign: 'center' }}>
					<Typography variant='h4'>4 bed</Typography>
					<Typography variant='h6'>1 bath 147$</Typography>
					<Typography variant='h6'>1.5 bath 159$</Typography>
					<Typography variant='h6'>2 bath 165$</Typography>
					<Typography variant='h6'>2.5 bath 180$</Typography>
					<Typography variant='h6'>3 bath 190$</Typography>
					<Typography variant='h6'>3.5 bath 199$</Typography>
					<Typography variant='h6'>4 bath 210$</Typography>
				</Grid>
			</Grid>
		</>
	)
}
