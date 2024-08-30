import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import './index.css'
import {Home,Categories,Favorites} from './pages';
import Layout from './layouts/Layout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/:category" element={<Categories/>}/>  //it will be diffrent for all Categories
      {/* <Route path="/search/:query" element={<SearchPage/>}/> */}
      {/* <Route path="/:type/:slug" element={<GifPage/>}/> */}
      <Route path="/favorites" element={<Favorites/>}/>
    
    </Route> 
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>
)
