import { Drawer, Typography, IconButton, Divider, Stack } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from "@mui/system"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import MenuBooks from "./MenuBooks";
import MenuUser from "./MenuUser";
import MenuHome from "./MenuHome";
import { colors } from "@mui/material";




const SidePanel = ({ isDrawerOpened, setIsDrawerOpened }) => {



  return (
    <Box >

      <IconButton sx={{marginLeft:"30px", marginTop: 2}} size="large" edge='start' aria-label="logo" onClick={() => setIsDrawerOpened(true)}>
        <MenuIcon ></MenuIcon>
      </IconButton>

      <Drawer
        sx={{
          width: '0px',
          flexShrink: 0,
        }}
        
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
          sx={{bgcolor:'#FFDA5C'}}
        >
          <Typography  variant="h5" component={'div'}>
            Side Panel
          </Typography>
          <IconButton onClick={() => setIsDrawerOpened(false)} sx={{ marginLeft: '20px' }}>
            <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
          </IconButton>

        </Stack>

        <Divider sx={{borderColor: "black"}}/>

        <Stack sx={{ height: '100vh'}}>
          <MenuHome />
          <MenuBooks />
          <MenuUser />
        </Stack>

      </Drawer>

    </Box>
  )
}

export default SidePanel