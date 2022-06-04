import React, { useState } from 'react'
import { AppBar } from '@mui/material'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import SanitizerIcon from '@mui/icons-material/Sanitizer'
import CleaningServicesIcon from '@mui/icons-material/CleaningServices'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import FacebookIcon from '@mui/icons-material/Facebook'
import { useLocation } from 'react-router-dom'

import { BRAND_NAME, PHONE } from '../utils/constants'
import { scrollToElementById } from '../utils/scrollToElementById'
import { Instagram } from '@material-ui/icons'
import { ReactComponent as Yelp } from '../images/icons/yelp.svg'
import MobileMenu from './Menu/MobileMenu'

const pages = ['services', 'extras', 'prices', 'contact']

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

						<MobileMenu
							pages={pages}
							pathname={pathname}
							anchorElNav={anchorElNav}
							handleCloseNavMenu={handleCloseNavMenu}
						/>
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
						<Typography textAlign='center' sx={{ mr: 1, ml: 1 }}>
							<Link
								href={'https://www.facebook.com/Illinoismaids'}
								target='_blank'
								style={{ color: '#fff' }}
								underline='none'>
								<FacebookIcon />
							</Link>
						</Typography>
						<Typography textAlign='center' sx={{ mr: 1 }}>
							<Link
								href={'https://www.instagram.com/illinois_maids/'}
								target='_blank'
								style={{ color: '#fff' }}
								underline='none'>
								<Instagram />
							</Link>
						</Typography>
						<Typography textAlign='center' sx={{ mr: 1 }}>
							<Link
								href={'https://www.yelp.com/biz/illinois-maids-chicago'}
								target='_blank'
								style={{ color: '#fff' }}
								underline='none'>
								<Yelp fill='#fff' style={{ width: '20px', height: '20px', color: '#fff' }} />
							</Link>
						</Typography>
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
