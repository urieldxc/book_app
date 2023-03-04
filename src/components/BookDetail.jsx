import { Button, Container, Grid, Link, List, ListItem, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { imageBook } from '../utils/imageBooks'

const BookDetail = ({ updatedList, setUpdatedList }) => {
    const { isbn } = useParams()
    const [bookDetails, setBookDetails] = useState()
    const navigate = useNavigate();

    const filterBookDetail = (isbn) => {
        const filtered = updatedList.find(book => book.isbn === isbn)
        setBookDetails(filtered)
    }

    useEffect(() => {
        if (updatedList) filterBookDetail(isbn)
    }, [updatedList, isbn])

    const handleDelete = (isbn) => {
        setUpdatedList(updatedList => updatedList.filter(obj => obj.isbn !== isbn));
        navigate("/books")
    }

    return (
        <Container>
            {bookDetails && (
                <Box pt={4}>

                    <Typography variant='h4' pb={8}>
                        About the book
                    </Typography>

                    <Paper>
                        <Grid container spacing={2}>
                            <Paper elevation={12}>
                                <img src={imageBook(bookDetails.isbn)} style={{ width: 460, height: 640 }}></img>
                            </Paper>

                            <Grid container xs={12} md={7} p={4}>

                                <Box minWidth={1/1}>
                                    <Typography variant='h4' fontWeight={600}>{bookDetails.title}</Typography>
                                    <Typography variant='h6'>{bookDetails.subtitle}</Typography>
                                </Box>

                                <Typography pt={'20px'} fontWeight={600}>Description</Typography>

                                <Box>
                                    <Typography>{bookDetails.description}</Typography>
                                </Box>

                                <Typography pt={'20px'} fontWeight={600}>Info</Typography>

                                <Grid container>

                                    <Grid xs={12} md={6}>
                                        <ListItem>Author: {bookDetails.author}</ListItem>
                                        <ListItem>Published: {bookDetails.published}</ListItem>
                                        <ListItem>Publisher: {bookDetails.publisher}</ListItem>
                                    </Grid>
                                    <Grid xs={12} md={6}>
                                        <ListItem>Category: {bookDetails.category}</ListItem>
                                        <ListItem>Pages: {bookDetails.pages}</ListItem>
                                        <ListItem>Isbn: {bookDetails.isbn}</ListItem>
                                    </Grid>
                                </Grid>
                                <Stack direction={'row'} mt={4} spacing={2} >
                                    <Button size='small' component={Link} variant='contained' href={`${bookDetails.website}`}> Website</Button>
                                    <Button size='small' variant='contained'>Add to favourites ❤️</Button>
                                    <Button size='small'  onClick={() =>handleDelete(bookDetails.isbn)} variant='contained'>Delete book 🗑️</Button>
                                </Stack>
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