import React from 'react'
import { Typography } from '@mui/material'

import { ADDRESS } from '../utils/constants'
export default function DescriptionComponent() {
	return (
		<Typography align='center' style={{ margin: 50 }}>
			{ADDRESS}
		</Typography>
	)
}
