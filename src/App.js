import { ThemeProvider, Box, Stack } from '@mui/material';
import SidePanel from './components/SidePanel/SidePanel';
import GlobalStyles from './theme/globalStyles';
import Test from './components/Test';
import theme from './theme/theme'
import { useState } from "react"

function App() {

  const [isDrawerOpened, setIsDrawerOpened] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Stack 
        direction={'row'}
        >

        <SidePanel isDrawerOpened={isDrawerOpened} setIsDrawerOpened={setIsDrawerOpened}/>

        <Box sx={ isDrawerOpened && {marginLeft:'250px'} }>
          {/* <Test /> */}
        </Box>

      </Stack>
    </ThemeProvider>

  );
}

export default App;
