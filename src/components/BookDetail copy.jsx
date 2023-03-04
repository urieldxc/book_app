import { Button, Container, Link, List, ListItem, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { imageBook } from '../utils/imageBooks'

const BookDetail = ({ updatedList }) => {
    const { isbn } = useParams()
    const [bookDetails, setBookDetails] = useState()

    const filterBookDetail = (isbn) => {
        const filtered = updatedList.find(book => book.isbn === isbn)
        setBookDetails(filtered)
    }

    useEffect(() => {
        if (updatedList) filterBookDetail(isbn)
    }, [updatedList, isbn])

    const handleDelete = (e) =>{

    }
    return (
        <Container>
            {bookDetails && (
                <>

                    <Typography variant='h4' pt={2}>
                        Book detail
                    </Typography>
                    <Paper sx={{ marginTop: 5, minHeight:""}} >
                        <Stack direction={'row'} spacing={6}>

                            <img src={imageBook(bookDetails.isbn)} style={{ width: 460, height: 640, padding: 20, paddingRight: 0 }}></img>

                            <Box pt={4} width='50%' sx={{ margin: 3}}>
                                <Box sx={{minHeight: "0%"}}>
                                    <Typography variant='h4'>{bookDetails.title}</Typography>
                                    <Typography variant='h6'>{bookDetails.subtitle}</Typography>
                                </Box>
                                <Stack spacing={2} direction={'row'} sx={{ minHeight: "80%"}} >
                                    <Box textAlign={'left'} sx={{ width: "90%" }} >
                                        <Box sx={{ minHeight: "40%" }}>
                                            <Typography py={'20px'} fontWeight={600}>Synopsis</Typography>
                                            <Typography > {bookDetails.description}</Typography>
                                        </Box>
                                        <Box sx={{ minHeight: "40%" }}>
                                            <Typography py={'20px'} fontWeight={600}>Info</Typography>
                                            <List >
                                                <Stack direction={'row'}>
                                                    <Box width={'60%'}>
                                                        <ListItem>Author: {bookDetails.author}</ListItem>
                                                        <ListItem>Published: {bookDetails.published}</ListItem>
                                                        <ListItem>Publisher: {bookDetails.publisher}</ListItem>
                                                        
                                                    </Box>
                                                    <Box>

                                                        <ListItem>Category: {bookDetails.category}</ListItem>
                                                        <ListItem>Pages: {bookDetails.pages}</ListItem>
                                                        <ListItem>Isbn: {bookDetails.isbn}</ListItem>
                                                    </Box>
                                                </Stack>
                                            </List>
                                        </Box>
                                        <Stack direction={'row'} mt={4} spacing={2} >
                                            <Button component={Link} variant='contained' href={`${bookDetails.website}`}> Website</Button>
                                            <Button variant='contained'>Add to favourites ❤️</Button>
                                            <Button onClick={handleDelete} variant='contained'>Delete book 🗑️</Button>
                                        

                                        </Stack>
                                    </Box>


                                </Stack>
                            </Box>
                        </Stack>
                    </Paper>

                </>
            )}
        </Container>
    )
}

export default BookDetail