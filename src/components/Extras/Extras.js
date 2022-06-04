import React from 'react'
import { Grid } from '@mui/material'
import ExtrasItem from './ExtrasItem'

export const Extras = ({ data }) => {
	return (
		<Grid container spacing={2} id='extras'>
			{data?.map((post, index) => (
				<ExtrasItem key={index} post={post} index={index} />
			))}
		</Grid>
	)
}
