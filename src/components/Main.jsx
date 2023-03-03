import BookList from '../pages/BookList';
import Home from '../pages/Home';
import BookDetail from './BookDetail';

import jsonBooks from '../utils/books.json'
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import AddBooks from '../pages/AddBooks';

const Main = () => {

  const [updatedList, setUpdatedList] = useState([])

  useEffect(() => {
    setUpdatedList(jsonBooks.books)
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookList updatedList={updatedList} setUpdatedList={setUpdatedList} />} />
        <Route path='/add-book' element={<AddBooks updatedList={updatedList} setUpdatedList={setUpdatedList} />} />
        <Route path='/books/:isbn' element={<BookDetail updatedList={updatedList} />} />
      </Routes>
    </div>
  )
}

export default Main