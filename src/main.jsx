import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Data from "./data/data";
import MovieView from './views/MovieView';

const routes = [
  {
    path: "/",
    element: <App />
  }
]; 

Data.forEach(movie => {
  routes.push({
    path: movie.title,
    element: <MovieView movie={movie} />,
  });
});



const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
