import React from 'react'

export default function ScrollToTopComponent(props) {
	return (
		<ScrollTop {...props}>
			<Fab color='secondary' size='small' aria-label='scroll back to top'>
				<KeyboardArrowUpIcon />
			</Fab>
		</ScrollTop>
	)
}
