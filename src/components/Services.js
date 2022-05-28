import React from 'react'
import { Grid } from '@material-ui/core'
import { Kitchen } from '@material-ui/icons'
import BathtubIcon from '@mui/icons-material/Bathtub'
import KingBedOutlinedIcon from '@material-ui/icons/KingBedOutlined'
import AirlineSeatIndividualSuiteOutlinedIcon from '@material-ui/icons/AirlineSeatIndividualSuiteOutlined'
import Typography from '@mui/material/Typography'

export const Services = () => {
	return (
		<Grid container spacing={2} style={{ margin: '10px' }} id='services'>
			<Grid item={true} xs={12} md={3} className='itemService'>
				{/* <HomeIcon fontSize='small' color='primary' /> */}
				<KingBedOutlinedIcon fontSize='large' color='primary' />
				<Typography variant='title'>Living room</Typography>
				<ul style={{ textAlign: 'left' }}>
					<li>Dust-Off Cobwebs</li>
					<li>Dust Baseboards</li>
					<li>Empty Out Trash Can</li>
					<li>Dust and wet wipe furniture surfaces (TV stands, bookcases, tables, dining tables, lamps, etc)</li>
					<li>Clean mirrors and Glass Surfaces</li>
					<li>Vacuum Tops of Couches and Under Cushions</li>
					<li>Vacuum and Mop Floors</li>
				</ul>
			</Grid>

			<Grid item={true} xs={12} md={3} className='itemService'>
				{/* <HomeIcon fontSize='small' color='primary' /> */}
				<AirlineSeatIndividualSuiteOutlinedIcon fontSize='large' color='primary' />
				<Typography variant='title'>Bedroom</Typography>
				<ul style={{ textAlign: 'left' }}>
					<li>Clean Glass Table Tops</li>
					<li>Wet Wipe Wood Surfaces</li>
					<li>Empty Trash Cans</li>
					<li>Tidy Up and Organize</li>
					<li>Swiffer Dust Furniture and Decorations</li>
					<li>Swiffer Dust Cobwebs</li>
					<li>Dust Ceiling Fans</li>
					<li>Dust Baseboards</li>
					<li>Dust & Wet Wipe Window Ledges</li>
					<li>Vacuum and Mop Bedroom Floors</li>
					<li>Vacuum Carpets and Small Rugs</li>
				</ul>
			</Grid>
			<Grid item={true} xs={12} md={3} className='itemService'>
				{/* <HomeIcon fontSize='small' color='primary' /> */}
				<BathtubIcon fontSize='large' color='primary' />
				<Typography variant='title'>Bathroom</Typography>
				<ul style={{ textAlign: 'left', fontSize: '15px' }}>
					<li>Scrub and Disinfect Sinks, toilets, bathtubs/showers</li>
					<li>Wipe Down Countertops</li>
					<li>Wipe Down the Outside of Bathroom Cabinets</li>
					<li>Wipe Shower Door</li>
					<li>Clean Mirrors</li>
					<li>Empty Trash Can(s)</li>
					<li>Dust and Wet Wipe Baseboards</li>
					<li>Vacuum and mop Bathroom Floors</li>
					<li>Vacuum Bathroom Rugs</li>
				</ul>
			</Grid>

			<Grid item={true} xs={12} md={3} className='itemService'>
				{/* <HomeIcon fontSize='small' color='primary' /> */}
				<Kitchen fontSize='large' color='primary' />
				<Typography variant='title'>Kitchen</Typography>
				<ul style={{ textAlign: 'left' }}>
					<li>Clean Inside Microwave</li>
					<li>Wipe Down Countertops</li>
					<li>Wipe Down Outside of Appliances</li>
					<li>Wipe Down Cabinet and Drawer Doors</li>
					<li>Wipe Down Exterior with Stainless Steel Polish: Dishwasher, Fridge and Oven</li>
					<li>Clean Stovetop </li>
					<li>Scrub and Clean Sink</li>
					<li>Empty Trash Can</li>
					<li>Empty Recycling Bin</li>
					<li>Vacuum and Mop Kitchen Floors</li>
				</ul>
			</Grid>
		</Grid>
	)
}
