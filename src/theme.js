import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#A7CECB',
      dark: '#8CADAB',
    },
    secondary: {
      main: '#E692A1',
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
  },

  // add more css properties as desired
});

export default theme;
