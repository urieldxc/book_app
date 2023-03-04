import { Card, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { imageBook } from '../utils/imageBooks'

const BookCard = ({ book }) => {
    return (
        <Link style={{textDecoration:"none"}} to={`/books/${book.isbn}`}>
            <Card sx={{ width: 280, height: 450 }} >
                <CardContent>
                    <Box
                        sx={{
                            height: 350,
                            width: 250,
                        }}
                        src={imageBook(book.isbn)}
                        alt={book.title}
                    >
                    <img src={imageBook(book.isbn)} style={{height: 350, width: 250}}></img>
                    </Box>
                    <Typography variant='body2' mt={2} fontWeight="bold" textAlign={'center'}>
                        {book.title}
                    </Typography>
                </CardContent>

            </Card>
        </Link>
    )
}

export default BookCard