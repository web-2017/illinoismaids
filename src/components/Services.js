import React from 'react'
import { Grid, Box } from '@mui/material'
import { Kitchen } from '@mui/icons-material'
import BathtubIcon from '@mui/icons-material/Bathtub'
import KingBedOutlinedIcon from '@mui/icons-material/KingBedOutlined'
import AirlineSeatIndividualSuiteOutlinedIcon from '@mui/icons-material/AirlineSeatIndividualSuiteOutlined'
import Typography from '@mui/material/Typography'
import BusinessIcon from '@mui/icons-material/Business'

export const Services = () => {
	return (
		<Grid container spacing={2} id='services'>
			<Grid item={true} xs={12} md={3} className='itemService'>
				<KingBedOutlinedIcon fontSize='large' color='primary' />
				<Typography variant='title'>Living room</Typography>
				<ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
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
				<AirlineSeatIndividualSuiteOutlinedIcon fontSize='large' color='primary' />
				<Typography variant='title'>Bedroom</Typography>
				<ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
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
				<BathtubIcon fontSize='large' color='primary' />
				<Typography variant='title'>Bathroom</Typography>
				<ul style={{ textAlign: 'left', paddingLeft: '20px', fontSize: '15px' }}>
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
				<Kitchen fontSize='large' color='primary' />
				<Typography variant='title'>Kitchen</Typography>
				<ul style={{ textAlign: 'left', paddingLeft: '20px' }}>
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
			<Box
				mt={3}
				mb={5}
				justifyContent='center'
				sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto' }}>
				<BusinessIcon fontSize='large' color='primary' style={{ margin: '10px 0' }} />
				<Typography variant='title' pb={2}>
					Office
				</Typography>
				<Typography variant='body1' align='center'>
					We serve general office spaces and medical offices we always customize the services to your specific needs
				</Typography>
			</Box>
		</Grid>
	)
}
