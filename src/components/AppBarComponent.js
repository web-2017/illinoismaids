import React, { useState } from 'react'
import { AppBar } from '@mui/material'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import SanitizerIcon from '@mui/icons-material/Sanitizer'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { useLocation } from 'react-router-dom'

import { BRAND_NAME, PHONE } from '../utils/constants'
import { scrollToElementById } from '../utils/scrollToElementById'

const pages = ['services', 'extras', 'contact']

const AppBarComponent = () => {
	const [anchorElNav, setAnchorElNav] = useState(null)
	const { pathname } = useLocation()

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget)
	}

	const handleCloseNavMenu = () => {
		setAnchorElNav(null)
	}

	return (
		<AppBar position='fixed' color='success'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					{/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					 */}
					<SanitizerIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
					<Typography
						variant='h6'
						noWrap
						component={RouterLink}
						to='/'
						sx={{
							mr: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						{BRAND_NAME}
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appear'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'>
							<MenuIcon />
						</IconButton>
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
					</Box>

					<CleaningServicesIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
					<Typography
						variant='h5'
						noWrap
						component='a'
						href=''
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'inherit',
							textDecoration: 'none',
						}}>
						{BRAND_NAME}
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pathname !== '/book' ? (
							pages.map((page) => (
								<Button
									key={page}
									onClick={() => scrollToElementById(page)}
									sx={{ my: 2, color: 'white', display: 'block' }}>
									{page}
								</Button>
							))
						) : (
							<Button component={RouterLink} to={'/'} sx={{ my: 2, color: 'white', display: 'block' }}>
								Home
							</Button>
						)}

						{pathname !== '/book' && (
							<Button component={RouterLink} to={'/book'} sx={{ my: 2, color: 'white', display: 'block' }}>
								book now
							</Button>
						)}
					</Box>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						<Box sx={{ flexGrow: 1 }} />
						<Typography textAlign='center'>
							<Link href={`tel:${PHONE}`} style={{ color: '#fff' }} underline='none'>
								{PHONE}
							</Link>
						</Typography>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
export default AppBarComponent
