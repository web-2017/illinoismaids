import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'

// variant: 'text' | contained | outlined
export const BookBtn = ({ text = 'book now', size = 'large', variant = 'outlined', ...props }) => {
	return (
		<Stack spacing={2} direction='row' {...props}>
			<Button size={size} variant={variant}>
				{text}
			</Button>
		</Stack>
	)
}
