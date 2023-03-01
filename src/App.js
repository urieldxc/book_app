import { ThemeProvider } from '@mui/material';
import Test from './components/Test';
import theme from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Test />
    </ThemeProvider>
  
  );
}

export default App;
