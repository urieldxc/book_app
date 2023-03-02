import BookList from '../pages/BookList';
import Home from '../pages/Home';
import BookDetail from './BookDetail';


import { Route, Routes } from "react-router-dom";
import { useState } from 'react';

const Main = () => {

  const [updatedList, setUpdatedList] = useState([])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BookList updatedList={updatedList} setUpdatedList={setUpdatedList}/>} />
        <Route path='/books/:isbn' element={<BookDetail updatedList={updatedList}/>} />
      </Routes>
    </div>
  )
}

export default Main