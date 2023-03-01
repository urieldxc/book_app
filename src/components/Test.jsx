import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import jsonBooks from '../utils/books.json'


const Test = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        setBooks(jsonBooks.books)
    }, [])


    return (
        <>
            <Button > Hi how are you</Button>
            <ul>
                {
                    books.map((book, i) => <li key={i}> <Typography>{book.title}</Typography></li> )
                }
            </ul>
        </>
    );
}

export default Test