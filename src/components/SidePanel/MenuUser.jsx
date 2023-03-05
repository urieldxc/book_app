import { Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material"

const MenuUser = () => {
    return (
        <List>
            <ListItem >
                <ListItemText>
                    <Typography variant="h6" fontWeight={'bold'} sx={{ paddingLeft: '10px' }}>
                        My account
                    </Typography>
                </ListItemText>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton disabled>
                    <Typography sx={{ paddingLeft: '10px' }} >
                        My user
                    </Typography>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton disabled>
                    <Typography sx={{ paddingLeft: '10px' }}>
                        Log out
                    </Typography>
                </ListItemButton>
            </ListItem>

        </List>
    )
}

export default MenuUser