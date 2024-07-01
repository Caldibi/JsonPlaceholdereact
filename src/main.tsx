import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import {HomePage, Root, ErrorPage, UserPage, UserDetailPage, FavList} from './routes';
import { UserAlbums, UserTodos,UserPosts, UserPostComments } from './routes/userspages';
import 'bootstrap/dist/css/bootstrap.min.css';
import { usersLoader } from './routes/UserPage';
import { userLoader } from './routes/UserDetailPage';
import { userPostLoader } from './routes/userspages/UserPosts';
import { userTodosLoader } from './routes/userspages/UserTodos';
import { userAlbumsLoader } from './routes/userspages/UserAlbums';
import { userPostCommentsLoader } from './routes/userspages/UserPostComments';
import UserAlbumsPhotos, { UserAlbumsPhotosLoader } from './routes/userspages/UserAlbumsPhotos';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element : <Root/>,
    errorElement: <ErrorPage />,
    children:[
      {
        errorElement: <ErrorPage />,
        children: [ 
      {
        index: true,
        element: <HomePage/>,
      },
      {
        path: "favlist",
        element: <FavList/>,
      },
      {
        path: "users",
        element: <UserPage/>,
        loader : usersLoader,
      },
      {
        path : "users/:userId",
        children :[
          {
            index: true,
            element : <UserDetailPage/>,
             // eslint-disable-next-line @typescript-eslint/no-explicit-any
            loader : userLoader as any,
          },
          {
            path : "posts",
            element : <UserPosts/>,
             // eslint-disable-next-line @typescript-eslint/no-explicit-any
            loader : userPostLoader as any,
          },
          {
            path : "posts/:postsId",
            element : <UserPostComments/>,
             // eslint-disable-next-line @typescript-eslint/no-explicit-any
            loader : userPostCommentsLoader as any,
          },
          {
            path : "todos",
            element : <UserTodos/>,
             // eslint-disable-next-line @typescript-eslint/no-explicit-any
            loader :userTodosLoader as any,
          },
          {
            path : "albums",
            element : <UserAlbums/>,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            loader : userAlbumsLoader as any,
          },
          {
            path : "albums/:albumId",
            element : <UserAlbumsPhotos/>,
             // eslint-disable-next-line @typescript-eslint/no-explicit-any
            loader : UserAlbumsPhotosLoader as any,
          },

        ],
      },
    
    ],
  }],
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
