import { ThemeProvider, Stack, Container, CssBaseline } from '@mui/material';
import SidePanel from './components/SidePanel/SidePanel';
import GlobalStyles from './theme/globalStyles';
import { useState } from "react";
import { darkTheme } from './theme/darkTheme';
import Main from './components/Main';

function App() {

  const [isDrawerOpened, setIsDrawerOpened] = useState(false)

  return (

    
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <CssBaseline />
      <Stack direction={'row'}>

        <SidePanel isDrawerOpened={isDrawerOpened} setIsDrawerOpened={setIsDrawerOpened}/>

        <Container>
          <Main />
        </Container>

      </Stack>
    </ThemeProvider>
    

  );
}

export default App;