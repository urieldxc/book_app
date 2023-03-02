import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BookList from '../pages/BookList';

import Home from '../pages/Home';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <h1>404 Not Found</h1>
    },
    {
      path: '/books',
      element: <BookList />
    },
    {
      path: '/manage-books',
      element: <h1>Manage books</h1>
    },
  ]);


const Main = () => {
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default Main