import { ThemeProvider, Box, Stack } from '@mui/material';
import SidePanel from './components/SidePanel';
import Test from './components/Test';
import GlobalStyles from './theme/globalStyles';
import theme from './theme/theme'
import { useState } from "react"

function App() {

  const [isDrawerOpened, setIsDrawerOpened] = useState(false)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Stack 
        direction={'row'}
        sx={{bgcolor: "#F9FAFB", height: "100vh"}}
        >

        <SidePanel isDrawerOpened={isDrawerOpened} setIsDrawerOpened={setIsDrawerOpened}/>

        <Box sx={ isDrawerOpened && {marginLeft:'250px'} }>
          <Test />
        </Box>

      </Stack>
    </ThemeProvider>

  );
}

export default App;
