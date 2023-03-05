import { Button, Container, Grid, colors, ListItem, Paper, Stack, Typography, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { imageBook } from '../utils/imageBooks'
import BookDetailActions from './BookDetailActions'
import DeleteModal from './DeleteModal'

const BookDetail = ({ updatedList, setUpdatedList }) => {
    const { isbn } = useParams()
    const [bookDetails, setBookDetails] = useState()
    const [open, setOpen] = useState(false)
    const navigate = useNavigate();


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const filterBookDetail = (isbn) => {
        const filtered = updatedList.find(book => book.isbn === isbn)
        setBookDetails(filtered)
    }
    //isbn
    useEffect(() => {
        if (updatedList) filterBookDetail(isbn)
    }, [updatedList, isbn])

    const handleDelete = (isbn) => {
        setUpdatedList(updatedList => updatedList.filter(obj => obj.isbn !== isbn));
        navigate("/books")
    }

    const dateConversor = (date) => {
        const conversedDate = new Date(date);
        const finalDate = `${conversedDate.getDate()}/${conversedDate.getMonth()}/${conversedDate.getFullYear()} `
        return finalDate
    }

    return (
        <Container>
            {bookDetails && (
                <Box pt={4}>
                    <Link to={"/books"} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button size='small' sx={{ px: 2 }}>
                            <Typography color={colors.deepPurple[200]} variant='h5'>
                                ← Return
                            </Typography>
                        </Button>
                    </Link>
    
                    <Paper>
                        <Grid container spacing={2} mt={2}>
                            <Grid item xs={12} md={5} p={0}>
                                <Paper elevation={12}>
                                    <img src={imageBook(bookDetails.isbn)} style={{ width: '100%', height: 'auto', marginTop: "-16px" }} alt={bookDetails.title}></img>
                                </Paper>
                            </Grid>
    
                            <Grid item container xs={12} md={7} p={4} style={{ paddingLeft: "50px" }}>
    
                                <Box minWidth={1 / 1}>
                                    <Typography variant='h4' fontWeight={600} sx={{ fontSize: {xs: '18px', md: '32px'} }}>{bookDetails.title}</Typography>
                                    <Typography variant='h6' sx={{ fontSize: {xs: '16px', md: '24px'} }}>{bookDetails.subtitle}</Typography>
                                </Box>
    
                                <Typography pt={'20px'} fontWeight={600} sx={{ fontSize: {xs: '16px', md: '24px'} }}>Description</Typography>
    
                                <Box>
                                    <Typography sx={{ fontSize: {xs: '14px', md: '18px'} }}>{bookDetails.description}</Typography>
                                </Box>
    
                                <Grid item container>
    
                                    <Grid item md={6} xs={6}>
                                        <ListItem>
                                            <ListItemText primary="Author" secondary={bookDetails.author} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary="Published" secondary={dateConversor(bookDetails.published)} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary="Publisher" secondary={bookDetails.publisher} />
                                        </ListItem>
                                    </Grid>
                                    <Grid item md={6} xs={6}>
                                        <ListItem>
                                            <ListItemText primary="Pages" secondary={bookDetails.pages} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary="Category" secondary={bookDetails.category} />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemText primary="ISBN" secondary={bookDetails.isbn} />
                                        </ListItem>
                                    </Grid>
                                </Grid>
    
                                <DeleteModal handleDelete={handleDelete} handleClose={handleClose} handleOpen={handleOpen} open={open} isbn={bookDetails.isbn}></DeleteModal>
    
                                <Grid >
                                    <BookDetailActions bookDetails={bookDetails} handleOpen={handleOpen} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
    
                </Box>
            )
            }
        </Container >
    )
    
}

export default BookDetail