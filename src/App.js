import { ThemeProvider, Box } from '@mui/material';
import Test from './components/Test';
import GlobalStyles from './theme/globalStyles';
import theme from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Box sx={{bgcolor: "#F9FAFB", height: "100vh"}}>
        <Test />
      </Box>
    </ThemeProvider>

  );
}

export default App;
