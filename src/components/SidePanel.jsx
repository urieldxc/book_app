import { Drawer, Typography, IconButton, Divider, Stack } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import { Box } from "@mui/system"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const SidePanel = ({ isDrawerOpened, setIsDrawerOpened }) => {



  return (
    <div>

      <IconButton size="large" edge='start' color='inherit' aria-label="logo" onClick={() => setIsDrawerOpened(true)}>
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
        >
          <Typography sx={{marginLeft: '40px'}} variant="h6" component={'div'}>
            Side Panel
          </Typography>
          <IconButton  onClick={() => setIsDrawerOpened(false)}>
            <KeyboardArrowLeftIcon></KeyboardArrowLeftIcon>
          </IconButton>

        </Stack>

        <Divider />

      </Drawer>

    </div>
  )
}

export default SidePanel