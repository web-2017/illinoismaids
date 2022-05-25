import React from 'react'
import Typography from '@mui/material/Typography'
export default function MainTitle({ title, ...params }) {
	return (
		<Typography {...params} variant='h4' align='center'>
			{title}
		</Typography>
	)
}
