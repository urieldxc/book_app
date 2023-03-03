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


    return (
        <Container>
            {bookDetails && (
                <>

                    <Typography variant='h4' pt={2}>
                        Book detail
                    </Typography>
                    <Paper sx={{ marginTop: 5 }}>
                        <Stack direction={'row'}>

                            <img src={imageBook(bookDetails.isbn)} style={{ width: 460, height: 640, padding: 20, paddingRight: 0 }}></img>

                            <Box pt={4} width='100%' sx={{ margin: 3 }}>
                                <Typography variant='h4'>{bookDetails.title}</Typography>
                                <Typography variant='h6'>{bookDetails.subtitle}</Typography>
                                <Stack spacing={2} direction={'row'}>
                                    <Box textAlign={'left'} >
                                        <Typography py={'20px'} fontWeight={600}>Synopsis</Typography>
                                        <Typography> {bookDetails.description}</Typography>
                                        <Box>
                                            <Typography py={'20px'} fontWeight={600}>Info</Typography>
                                            <List>
                                                <Stack direction={'row'}>
                                                    <Box width={'50%'}>
                                                        <ListItem>Author: {bookDetails.author}</ListItem>
                                                        <ListItem>Published: {bookDetails.published}</ListItem>
                                                        <ListItem>Publisher: {bookDetails.publisher}</ListItem>
                                                        <ListItem>Website: <Link href={`${bookDetails.website}`}>{bookDetails.website}</Link></ListItem>
                                                    </Box>
                                                    <Box>

                                                        <ListItem>Category: {bookDetails.category}</ListItem>
                                                        <ListItem>Pages: {bookDetails.pages}</ListItem>
                                                        <ListItem>Isbn: {bookDetails.isbn}</ListItem>
                                                    </Box>
                                                </Stack>
                                            </List>
                                        </Box>
                                        <Stack direction={'row'} mt={4}>
                                            <Button variant='contained'>Add to favourites ❤️</Button>

                                            
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