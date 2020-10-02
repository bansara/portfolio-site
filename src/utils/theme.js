import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: 'rgb(173,215,255)',
        contrastText: 'var(--white)'
    },
    secondary: {
        main: 'rgb(39,232,167)',
        contrastText: 'var(--white)'
      }
    },
  });

  export default theme;