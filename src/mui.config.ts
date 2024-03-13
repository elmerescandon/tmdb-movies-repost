import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['Sora', 'sans-serif'].join(','),
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#FFFFFF',
    },
  },
});

export default theme;
