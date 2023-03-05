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
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      sx={{ height: '100vh' }}
    >
      <SidePanel
        isDrawerOpened={isDrawerOpened}
        setIsDrawerOpened={setIsDrawerOpened}
        sx={{
          width: { xs: '100%', md: '240px' },
          flexShrink: 0,
          flexGrow: 1,
        }}
      />

      <Container sx={{ flexGrow: 999 }}>
        <Main />
      </Container>
    </Stack>
  </ThemeProvider>
);

}

export default App;