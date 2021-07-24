import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#457B9D',
			dark: '#8CADAB',
		},
		secondary: {
			main: '#E63946',
			dark: '#B4737F',
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
	// add more css properties as desired
});

export default theme;
