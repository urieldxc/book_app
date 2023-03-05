import { Grid, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import BookCard from '../components/BookCard'


const BookList = ({ updatedList }) => {

    return (
        <Stack>
            <Typography variant='h4' pt={2} textAlign="center">
                Book list
            </Typography>

            <Grid container spacing={4} pt={6}>
                {updatedList.map((book, i) => (
                    <Grid item key={i} xs={12} sm={6} md={4} lg={3} sx={{ width: 160 }}>
                        <Box key={i}>
                            <BookCard book={book} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Stack>
    );
}

export default BookList;