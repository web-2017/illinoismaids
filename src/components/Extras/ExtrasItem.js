import React from 'react'
import { Grid } from '@material-ui/core'
import { Apartment, BathtubIcon, Kitchen } from '@material-ui/icons'
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined'
import AirlineSeatIndividualSuiteOutlinedIcon from '@material-ui/icons/AirlineSeatIndividualSuiteOutlined'
import Typography from '@mui/material/Typography'

import bg from '../../images/2.jpg'
export default function ExtrasItem() {
	return (
		<>
			<Grid item xs={12} md={4} className='itemService'>
				{/* <HomeIcon fontSize='small' color='primary' /> */}
				<Typography variant='h5'>Refrigerator</Typography>
				<img src={bg} alt='' style={{ width: '100%', height: '200px' }} />
				<Typography variant='body1' style={{ padding: 10 }}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptatum dicta reiciendis totam nostrum
					doloribus commodi rerum libero, officia iure.
				</Typography>
			</Grid>
			<Grid item xs={12} md={4} className='itemService'>
				{/* <HomeIcon fontSize='small' color='primary' /> */}
				<Typography variant='h5'>Refrigerator</Typography>
				<img src={bg} alt='' style={{ width: '100%', height: '200px' }} />
				<Typography variant='body1' style={{ padding: 10 }}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptatum dicta reiciendis totam nostrum
					doloribus commodi rerum libero, officia iure.
				</Typography>
			</Grid>
			<Grid item xs={12} md={4} className='itemService'>
				{/* <HomeIcon fontSize='small' color='primary' /> */}
				<Typography variant='h5'>Refrigerator</Typography>
				<img src={bg} alt='' style={{ width: '100%', height: '200px' }} />
				<Typography variant='body1' style={{ padding: 10 }}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium voluptatum dicta reiciendis totam nostrum
					doloribus commodi rerum libero, officia iure.
				</Typography>
			</Grid>
		</>
	)
}
