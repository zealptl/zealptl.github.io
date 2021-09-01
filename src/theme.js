import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#5d95b8',
			main: '#457B9D',
			dark: '#3b6985',
		},
		secondary: {
			light: '#ec6670',
			main: '#E63946',
			dark: '#d21a28',
		},
		tertiary: {
			main: '#9D9FAA',
			dark: '#2D2D2D',
			light: '#F7F7F7',
		},
		background: {
			light: '#fff',
			dark: '#333',
		},
		font: {
			dark: '#000',
			light: '#fff',
		},
	},
	breakpoints: {
		values: {
			md: 480,
		},
	},
});

export default theme;
