import { Routes, Route} from 'react-router-dom';
import {Suspense } from 'react';
import React from 'react';
import Navigation from '../components/Novigation/Novigation'
import Home from '../pages/Home/Home'
import Movies from '../pages/Movies/Movies'
import MovieDetails from '../pages/MovieDetails/MovieDetails'
import Cast from '../pages/MovieDetails/Cast/Cast'
import Reviews from '../pages/MovieDetails/Reviews/Reviews'
import Loader  from '../components/Loader/Loader'


export const App = () => {
  return (
  
    
      
<Suspense fallback={<Loader />}>
<Routes>
  <Route path='/' element={<Navigation/>}>
  <Route index element={<Home />}/>
  <Route path="movies" element={<Movies/>}/>
  <Route path="movies/:movieId" element={<MovieDetails/>}>
    
    <Route path="cast" element={<Cast/>}/>
    <Route path="reviews" element={<Reviews/>}/>

   </Route>
  </Route>
</Routes>
</Suspense>


);
};


