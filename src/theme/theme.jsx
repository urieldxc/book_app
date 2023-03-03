import { createTheme, responsiveFontSizes } from "@mui/material";
import { blue, red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary:{
            main: "#FFDA5C",
            // main: blue[500],
        },
    },
    components: {
        MuiLink: {
          styleOverrides: {
            root: {
              textDecoration: 'none',
            },
          },
        },
        
      },
});

export default responsiveFontSizes(theme);