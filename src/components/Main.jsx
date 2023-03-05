import { Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import jsonBooks from '../utils/books.json'
import BookDetail from './BookDetail';
import BookList from '../pages/BookList';
import AddBooks from '../pages/AddBooks';
import NotFoundPage from "../pages/NotFoundPage";

const Main = () => {

  const [updatedList, setUpdatedList] = useState([])

  useEffect(() => {
    setUpdatedList(jsonBooks.books)
  }, [])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/books" />} />
        <Route path='/books' element={<BookList updatedList={updatedList} setUpdatedList={setUpdatedList} />} />
        <Route path='/add-book' element={<AddBooks updatedList={updatedList} setUpdatedList={setUpdatedList} />} />
        <Route path='/books/:isbn' element={<BookDetail updatedList={updatedList} setUpdatedList={setUpdatedList} />} />
        <Route path='/404' element={<NotFoundPage/>} />
        <Route path='*' element={<Navigate to='/404' />} />
      </Routes>
    </div>
  )
}

export default Main