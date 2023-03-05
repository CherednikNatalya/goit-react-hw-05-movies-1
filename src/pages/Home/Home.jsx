import { useEffect, useState } from "react";
import Loader from '../../components/Loader/Loader'
import React from 'react';
import Section from '../../components/Section/Section'

import TrendingList from '../../components/TrendingList/TrendingList'
import {STATUS} from '../../helpers/Status'

import { fetchTrendingMovies } from '../../API/API'



const Home =() =>{
  
const [movies, setMovies] = useState([]);
const[status, setStatus] = useState(STATUS.idle)


// useEffect(()=>{
//   setStatus(STATUS.pending)

//   fetchTrendingMovies()
//   .then(res => {
//     setTreadingList(res.results);
//     console.log(res.results);
//     setStatus(STATUS.success)
//   })
//   .catch(error => setStatus(STATUS.error))

// },[])


useEffect(() => {
  const getMovies = async () => {
    setStatus(STATUS.loading);
    try {
      const data = await fetchTrendingMovies();
      onResolve(data);
    } catch (error) {
      console.log(error);
      setStatus(STATUS.error);
    }
  };
  getMovies();
}, []);

// useEffect(() => {
//   onMovieTrending().then(res => {
//     setTreadingList(res.results);
//   });
// }, []);

const onResolve = data => {
  const movie = data.map(({ id, poster_path, original_title }) => ({
    id,
    img: poster_path,
    title: original_title,
  }));
  setMovies(movie);
  setStatus(STATUS.success);
}


return (
  <>
 <Section tittle ={'Trending Today'}>
 {status === STATUS.pending && <Loader/>}
 {status===STATUS.success && <TrendingList moviest={movies}/> 
}
</Section>
</>
)
}

export default Home;