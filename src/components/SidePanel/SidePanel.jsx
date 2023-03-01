import { Drawer, Typography, IconButton, Divider, Stack, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from "@mui/system"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import MenuBooks from "./MenuBooks";
import MenuUser from "./MenuUser";


const SidePanel = ({ isDrawerOpened, setIsDrawerOpened }) => {



  return (
    <Box >

      <IconButton sx={{margin:"40px"}} size="large" edge='start' color='inherit' aria-label="logo" onClick={() => setIsDrawerOpened(true)}>
        <MenuIcon></MenuIcon>
      </IconButton>

      <Drawer
        sx={{
          width: '0px',
          flexShrink: 0,
        }}
        variant="persistent"
        anchor='left'
        open={isDrawerOpened}
        onClose={() => setIsDrawerOpened(false)}
        
      >
        <Stack
          p={2}
          width='250px'
          direction='row'
          justifyContent="space-evenly"
          alignItems="center"
          sx={{bgcolor:'#F4F6F8'}}
        >
          <Typography  variant="h5" component={'div'}>
            Side Panel
          </Typography>
          <IconButton onClick={() => setIsDrawerOpened(false)} sx={{ marginLeft: '20px' }}>
            <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
          </IconButton>

        </Stack>

        <Divider />

        <Stack sx={{bgcolor:'#F4F6F8', height: '100vh'}}>
          <MenuBooks />
          <MenuUser />
        </Stack>

      </Drawer>

    </Box>
  )
}

export default SidePanel