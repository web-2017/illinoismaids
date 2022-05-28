import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Zoom from '@mui/material/Zoom'
import PropTypes from 'prop-types'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

export const ScrollToTopButton = ({ id }) => {
	const handleClick = (event) => {
		const anchor = (event.target.ownerDocument || document).querySelector(id)

		if (anchor) {
			anchor.scrollIntoView({
				behavior: 'smooth',
				block: 'center',
			})
		}
	}
	// Note that you normally won't need to set the window ref as useScrollTrigger
	// will default to window.
	// This is only being set here because the demo is in an iframe.
	const trigger = useScrollTrigger({
		target: window,
		disableHysteresis: true,
		threshold: 100,
	})

	return (
		<Zoom in={trigger}>
			<Box onClick={handleClick} role='presentation' sx={{ position: 'fixed', bottom: 16, right: 16 }}>
				<Fab color='secondary' size='small' aria-label='scroll back to top'>
					<KeyboardArrowUpIcon />
				</Fab>
			</Box>
		</Zoom>
	)
}

ScrollToTopButton.propTypes = {
	window: PropTypes.func,
}
