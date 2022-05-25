import React from 'react'
import { Grid } from '@material-ui/core'
import { Kitchen } from '@material-ui/icons'
import BathtubIcon from '@mui/icons-material/Bathtub'
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined'
import AirlineSeatIndividualSuiteOutlinedIcon from '@material-ui/icons/AirlineSeatIndividualSuiteOutlined'
import Typography from '@mui/material/Typography'

export const Services = () => {
	return (
		<Grid container spacing={2} style={{ margin: '10px' }}>
			<Grid item xs={12} md={3} className='itemService'>
				{/* <HomeIcon fontSize='small' color='primary' /> */}
				<KingBedOutlinedIcon fontSize='large' color='primary' />
				<Typography variant='h5'>Living room</Typography>
				<ul style={{ textAlign: 'left' }}>
					<li>Tidy Up and Organize</li>
					<li>Swiffer Dust Furniture and Decorations</li>
					<li>Clean Glass Table Tops</li>
					<li>Wet Wipe Wood Surfaces</li>
					<li>Empty Trash Cans</li>
					<li>Swiffer Dust Cobwebs</li>
					<li>Dust Ceiling Fans</li>
					<li>Dust Baseboards</li>
					<li>Dust & Wet Wipe Window Ledges</li>
					<li>Vacuum and Mop Bedroom Floors</li>
					<li>Vacuum Carpets and Small Rugs</li>
				</ul>
			</Grid>

			<Grid item xs={12} md={3} className='itemService'>
				{/* <HomeIcon fontSize='small' color='primary' /> */}
				<AirlineSeatIndividualSuiteOutlinedIcon fontSize='large' color='primary' />
				<Typography variant='h5'>Bedroom</Typography>
				<ul style={{ textAlign: 'left' }}>
					<li>Tidy Up and Organize</li>
					<li>Swiffer Dust Furniture and Decorations</li>
					<li>Clean Glass Table Tops</li>
					<li>Wet Wipe Wood Surfaces</li>
					<li>Empty Trash Cans</li>
					<li>Swiffer Dust Cobwebs</li>
					<li>Dust Ceiling Fans</li>
					<li>Dust Baseboards</li>
					<li>Dust & Wet Wipe Window Ledges</li>
					<li>Vacuum and Mop Bedroom Floors</li>
					<li>Vacuum Carpets and Small Rugs</li>
				</ul>
			</Grid>
			<Grid item xs={12} md={3} className='itemService'>
				{/* <HomeIcon fontSize='small' color='primary' /> */}
				<BathtubIcon fontSize='large' color='primary' />
				<Typography variant='h5'>Bathroom</Typography>
				<ul style={{ textAlign: 'left' }}>
					<li>Tidy Up and Organize</li>
					<li>Swiffer Dust Furniture and Decorations</li>
					<li>Clean Glass Table Tops</li>
					<li>Wet Wipe Wood Surfaces</li>
					<li>Empty Trash Cans</li>
					<li>Swiffer Dust Cobwebs</li>
					<li>Dust Ceiling Fans</li>
					<li>Dust Baseboards</li>
					<li>Dust & Wet Wipe Window Ledges</li>
					<li>Vacuum and Mop Bedroom Floors</li>
					<li>Vacuum Carpets and Small Rugs</li>
				</ul>
			</Grid>

			<Grid item xs={12} md={3} className='itemService'>
				{/* <HomeIcon fontSize='small' color='primary' /> */}
				<Kitchen fontSize='large' color='primary' />
				<Typography variant='h5'>Kitchen</Typography>
				<ul style={{ textAlign: 'left' }}>
					<li>Tidy Up and Organize</li>
					<li>Swiffer Dust Furniture and Decorations</li>
					<li>Clean Glass Table Tops</li>
					<li>Wet Wipe Wood Surfaces</li>
					<li>Empty Trash Cans</li>
					<li>Swiffer Dust Cobwebs</li>
					<li>Dust Ceiling Fans</li>
					<li>Dust Baseboards</li>
					<li>Dust & Wet Wipe Window Ledges</li>
					<li>Vacuum and Mop Bedroom Floors</li>
					<li>Vacuum Carpets and Small Rugs</li>
				</ul>
			</Grid>
		</Grid>
	)
}
