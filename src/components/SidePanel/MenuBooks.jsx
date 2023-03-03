import { Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import {Link} from 'react-router-dom'

const MenuBooks = () => {
    return (
        <List >
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
                        <Link to={'/books'} style={{textDecoration: 'none', color:'inherit'}} > Book List</Link>
                    </Typography>
                </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
                <ListItemButton>
                    <Typography  sx={{paddingLeft: '10px'}}>
                        
                        <Link to ={'/add-book'} style={{textDecoration: 'none', color:'inherit'}} > Add books </Link>
                    </Typography>
                </ListItemButton>
            </ListItem>

        </List>
    )
}

export default MenuBooks