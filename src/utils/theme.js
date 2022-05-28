import { createTheme } from '@mui/material/styles'
export const theme = createTheme({
	typography: {
		fontFamily: ['-apple-system', 'Titillium Web', 'sans-serif'].join(','),
		h5: {
			fontSize: '1.5rem',
			fontFamily: ['Koulen', 'cursive'].join(','),
		},
		h4: {
			fontSize: '3em',
			fontFamily: ['Grape Nuts', 'cursive'].join(','),
			fontWeight: 'bold',
		},
		title: {
			display: 'block',
			fontSize: '1.5rem',
			fontFamily: ['Pacifico', 'cursive'].join(','),
		},
	},
})
