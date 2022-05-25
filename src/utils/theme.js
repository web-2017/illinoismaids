import { createTheme } from '@mui/material/styles'
export const theme = createTheme({
	typography: {
		fontFamily: ['-apple-system', 'Titillium Web', 'sans-serif'].join(','),
		h5: {
			fontSize: '2rem',
			fontFamily: ['Koulen', 'cursive'].join(','),
		},
		h4: {
			fontSize: '3em',
			fontFamily: ['Grape Nuts', 'cursive'].join(','),
			fontWeight: 'bold',
		},
	},
})

// font-family: 'Koulen', cursive;
