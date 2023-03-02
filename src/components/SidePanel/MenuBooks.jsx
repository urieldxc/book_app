import { Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import {Link} from 'react-router-dom'

const MenuBooks = () => {
    return (
        <List>
            <ListItem >
                <ListItemText>
                    <Typography variant="h6" fontWeight={'bold'}  sx={{paddingLeft: '10px'}}>
                        Books
                    </Typography>
                </ListItemText>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton>
                    <Typography  sx={{paddingLeft: '10px'}}>
                        <Link to={'/books'}> Book List</Link>
                    </Typography>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton>
                    <Typography  sx={{paddingLeft: '10px'}}>
                        Manage books
                    </Typography>
                </ListItemButton>
            </ListItem>

        </List>
    )
}

export default MenuBooks