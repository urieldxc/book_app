import { Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { Link } from 'react-router-dom'

const MenuBooks = () => {
    return (
        <List >
            <ListItem >
                <ListItemText>
                    <Typography variant="h6" fontWeight={'bold'} sx={{ paddingLeft: '10px' }}>
                        Books
                    </Typography>
                </ListItemText>
            </ListItem>

            <Link to={'/books'} style={{ textDecoration: 'none', color: 'inherit' }} >
                <ListItem disablePadding>
                    <ListItemButton>
                        <Typography sx={{ paddingLeft: '10px' }}>
                            Book List
                        </Typography>
                    </ListItemButton>
                </ListItem>
            </Link>
            <Link to={'/add-book'} style={{ textDecoration: 'none', color: 'inherit' }} >
                <ListItem disablePadding>
                    <ListItemButton>
                        <Typography sx={{ paddingLeft: '10px' }}>

                            Add books
                        </Typography>
                    </ListItemButton>
                </ListItem>
            </Link>
        </List>
    )
}

export default MenuBooks