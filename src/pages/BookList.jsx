import { Grid, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'
import jsonBooks from '../utils/books.json'

const BookList = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        setBooks(jsonBooks.books)
    }, [])

    return (
        <Stack>
            <Typography variant='h4' pt={2}>
                Book list
            </Typography>


            <Grid container spacing={4} pt={6}>

                {
                    books.map((book, i) => {
                        return (
                            <Grid item xs={12} md={4} lg={3}>
                                <Box key={i}>
                                    <BookCard book={book} />
                                </Box>
                            </Grid>

                        )
                    })
                }

            </Grid>
        </Stack>
    )
}

export default BookList