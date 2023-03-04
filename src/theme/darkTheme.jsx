import { colors } from '@mui/material';
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary:{
        main: colors.deepPurple[300] ,
        // contrastText: "#fff"
    },
    secondary:{
        main: "#000000"
    },
    background: {
        default: colors.blueGrey["900"],
        paper: colors.blueGrey[800],
      },
  },

});