import { Drawer, Typography, IconButton, Divider, Stack } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from "@mui/system"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import MenuBooks from "./MenuBooks";
import MenuUser from "./MenuUser";
import MenuHome from "./MenuHome";
import { colors } from "@mui/material";





const SidePanel = ({ isDrawerOpened, setIsDrawerOpened }) => {

  const hoverMenuStyle = {
    '&:hover':{
        transform: "scale(1.5, 1.5) translate(-135%, -25%)",
        background: colors.blueGrey[700],
        backgroundColor: 'transparent',
    }
};

  return (
    <Box >

      <IconButton  sx={{...hoverMenuStyle, marginTop: 2 }} size="large" edge='start' aria-label="logo" onClick={() => setIsDrawerOpened(true)}>
        <MenuIcon  style={{position: "absolute", left:"100", top:"22", color: colors.deepPurple[200]}} ></MenuIcon>
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
        >
          <Typography  variant="h5" component={'div'}>
            Side Panel
          </Typography>
          <IconButton onClick={() => setIsDrawerOpened(false)} sx={{ marginLeft: '20px',color: colors.deepPurple[200] }}>
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