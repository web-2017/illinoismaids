import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

// variant: 'text' | contained | outlined
export const BookBtn = ({ text = 'book now', color = 'success', size = 'large', variant = 'outlined', ...props }) => {
	return (
		<Stack spacing={2} direction='row' {...props}>
			<Button size={size} variant={variant} color={color} component={Link} to='/book'>
				{text}
			</Button>
		</Stack>
	)
}
