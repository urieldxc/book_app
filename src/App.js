import { ThemeProvider, Box, Stack, Container } from '@mui/material';
import SidePanel from './components/SidePanel/SidePanel';
import GlobalStyles from './theme/globalStyles';
import theme from './theme/theme';
import { useState } from "react";
import Main from './components/Main';

function App() {

  const [isDrawerOpened, setIsDrawerOpened] = useState(false)

  return (

    
    <ThemeProvider theme={theme}>
      {/* <GlobalStyles /> */}
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
