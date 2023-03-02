import React from 'react'
import { useParams } from 'react-router-dom'

const BookDetail = () => {
    const { isbn } = useParams()

    return (
        <div>{isbn}</div>
    )
}

export default BookDetail