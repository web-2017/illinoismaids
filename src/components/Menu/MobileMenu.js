import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { scrollToElementById } from '../../utils/scrollToElementById'

export default function MobileMenu({ pages, pathname, anchorElNav, handleCloseNavMenu }) {
	return (
		<Menu
			id='menu-appbar'
			anchorEl={anchorElNav}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left',
			}}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'left',
			}}
			open={Boolean(anchorElNav)}
			onClose={handleCloseNavMenu}
			sx={{
				display: { xs: 'block', md: 'none' },
			}}>
			{pathname !== '/book' ? (
				pages.map((page) => {
					return (
						<MenuItem key={page} onClick={handleCloseNavMenu}>
							<Typography textAlign='center' onClick={() => scrollToElementById(page)}>
								{page}
							</Typography>
						</MenuItem>
					)
				})
			) : (
				<MenuItem onClick={handleCloseNavMenu} component={RouterLink} to='/'>
					<Typography textAlign='center'>Back to Home</Typography>
				</MenuItem>
			)}

			{pathname !== '/book' && (
				<MenuItem onClick={handleCloseNavMenu} component={RouterLink} to='/book'>
					<Typography textAlign='center'>book now</Typography>
				</MenuItem>
			)}
		</Menu>
	)
}
