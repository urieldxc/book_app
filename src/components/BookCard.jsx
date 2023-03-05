import { Card, CardContent, colors, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
import { imageBook } from '../utils/imageBooks'

const BookCard = ({ book }) => {
    const hoverStyle = {
        '&:hover':{
            transform: "translate(-0%, -2%)",
            background: colors.blueGrey[700]
        }
    };
    return (
        <Link style={{textDecoration:"none"}} to={`/books/${book.isbn}`}>
            <Card sx={{ ...hoverStyle,width: 280, height: 450 }} >
                <CardContent>
                    <Box
                        sx={{
                            height: 350,
                            width: 250,
                        }}
                        src={imageBook(book.isbn)}
                        alt={book.title}
                    >
                    <img src={imageBook(book.isbn)} style={{height: 350, width: 250}} alt={book.title}></img>
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