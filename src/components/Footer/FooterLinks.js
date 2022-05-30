import { Instagram } from '@material-ui/icons'
import Link from '@material-ui/core/Link'
import FacebookIcon from '@mui/icons-material/Facebook'

import { ReactComponent as Yelp } from '../../images/icons/yelp.svg'

export default function FooterLinks() {
	return (
		<>
			<Link
				href={'https://www.instagram.com/illinois_maids/'}
				target='_blank'
				style={{ color: '#000' }}
				underline='none'>
				<Instagram />
			</Link>
			<Link href={'https://www.facebook.com/Illinoismaids'} target='_blank' style={{ color: '#000' }} underline='none'>
				<FacebookIcon />
			</Link>
			<Link
				href={'https://www.yelp.com/biz/illinois-maids-chicago'}
				target='_blank'
				style={{ color: '#000' }}
				underline='none'>
				<Yelp fill='#000' style={{ width: '20px', height: '20px', color: '#fff' }} />
			</Link>
		</>
	)
}
