import Divider from '@mui/material/Divider'

import ContactForm from '../components/ContactForm'
import { Hero } from '../components/Hero'
import { Services } from '../components/Services'
import { Extras } from '../components/extras/Extras'
import DescriptionComponent from '../components/DescriptionComponent'
import MainTitle from '../components/MainTitle'
import MainContainer from '../components/MainContainer'
import { extraData } from '../data'
import { BookBtn } from '../components/BookBtn'
import { ScrollToTopButton } from '../components/ScrollToTopButton'
import { Prices } from '../components/price/Prices'

function HomeScreen() {
	return (
		<>
			<MainContainer>
				{/* Hero unit */}
				<Hero />
				<DescriptionComponent />
				<Divider style={{ marginTop: '20px', marginBottom: '20px' }} />

				{/* Services */}
				<MainTitle style={{ margin: '20px' }} title='Services' />
				<Services />
				<BookBtn justifyContent='center' />
				<Divider style={{ marginTop: '20px', marginBottom: '20px' }} />

				{/* Prices */}
				<MainTitle style={{ margin: '20px' }} title='Prices' />
				<Prices />
				<BookBtn justifyContent='center' />
				<Divider style={{ marginTop: '20px', marginBottom: '20px' }} />

				{/* Extras */}
				<MainTitle style={{ margin: '40px' }} title='Extras' />
				<Extras data={extraData} />
				<BookBtn justifyContent='center' style={{ margin: '30px' }} />
				<Divider style={{ marginTop: '20px', marginBottom: '20px' }} />
				<MainTitle style={{ margin: '20px' }} title='Contact' />

				{/* ContactForm */}
				<ContactForm id='contact' />
			</MainContainer>
			<ScrollToTopButton id='#back-to-top-anchor' />
		</>
	)
}
export default HomeScreen
