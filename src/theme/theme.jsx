import { createTheme, responsiveFontSizes } from "@mui/material";
import { blue, red } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary:{
            main: "#FF33F3",
            // main: blue[500],
        },
    }
});

export default responsiveFontSizes(theme);