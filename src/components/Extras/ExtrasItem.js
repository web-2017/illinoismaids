import React from 'react'
import { Grid } from '@material-ui/core'
import { Apartment, BathtubIcon, Kitchen } from '@material-ui/icons'

import Typography from '@mui/material/Typography'

export default function ExtrasItem({ post, index }) {
	return (
		<>
			<Grid item={true} xs={12} sm={6} md={4} className='itemService'>
				<Typography style={{ fontSize: '1.5rem', paddingBottom: '10px' }} variant='title'>
					{post?.title} {post?.price}
				</Typography>
				<img src={post?.img} alt='' style={{ width: '100%', height: '200px' }} />
				<Typography variant='body1' style={{ padding: 10 }}>
					{post?.text}
				</Typography>
			</Grid>
		</>
	)
}
