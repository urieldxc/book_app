import { Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { Link } from 'react-router-dom'
const MenuHome = () => {
    return (
        <div>
            <List>
                <ListItem >
                    <ListItemText>
                        <Typography variant="h6" fontWeight={'bold'} sx={{ paddingLeft: '10px' }}>
                            Home
                        </Typography>
                    </ListItemText>
                </ListItem>

            </List>

        </div>
    )
}

export default MenuHome