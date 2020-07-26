import * as React from 'react';
import './App.css';
import Routes from './Routes';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const prefersDarkMode = useMediaQuery( '(prefers-color-scheme: dark)' );

  const theme = React.useMemo(
    () =>
      createMuiTheme( {
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
        },
      } ),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
