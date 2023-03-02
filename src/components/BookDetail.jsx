import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const BookDetail = ({ updatedList }) => {
    const { isbn } = useParams()
    const [bookDetails, setBookDetails] = useState()

    const filterBookDetail = (isbn) =>{
        const filtered = updatedList.find(book => book.isbn === isbn)
        setBookDetails(filtered)
    }

    useEffect(() => {
        if(updatedList) filterBookDetail(isbn)
    }, [updatedList, isbn])
    
    
    return (
        <div>
            {bookDetails && (
                <div>
                    <div>{bookDetails.title}</div>
                    <div>{bookDetails.isbn}</div> 
                </div>
            )}
        </div>
    )
}

export default BookDetail