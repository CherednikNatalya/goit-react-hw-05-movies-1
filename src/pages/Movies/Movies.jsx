import React from 'react';
import Notiflix from 'notiflix';
import { useState, useEffect} from "react";
import Searchbar from '../../components/Searchbar/Searchbar'
import {STATUS} from '../../helpers/Status'
import {fetchSearchMovies} from '../../API/API'

const Movies =() => {

  const [searchQuery, setSearchQuery] =useState('')
  const [movies, setMovies] =useState([])
  const [status, setStatus] =useState(STATUS.idle)
//   const [totalFind, setTotalFind] = useState(0);
//   const [totalHits, setTotalHits] = useState(0);
//   const [page, setPage] =useState(1)

    const onSubmit = value => {
        setSearchQuery(value);
        // setPage(1);
        // setImgData([]);
        // setTotalFind(0);
        console.log(searchQuery)
    }


    // const handleInput = async e => {
    //   return await fetchSearchMovies(e).then(res => setMovies(res.results));
    // };

    useEffect(() => {
      if (!searchQuery) return;
      if (searchQuery === '') return;
      const getMovies = async () => {
        setStatus(STATUS.loading);
        try {
          const data = await fetchSearchMovies(searchQuery);
          onResolve(data);
        } catch (error) {
          console.log(error);
          setStatus(STATUS.error);
        }
      };
      getMovies();
    }, [searchQuery]);
  
    const onResolve = data => {
      if (data.length === 0) {
        Notiflix.Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        setStatus(STATUS.idle);
        return;
      }
      const movie = data.map(({ id, poster_path, original_title }) => ({
        id,
        img: poster_path,
        title: original_title,
      }));
      setMovies(movie);
      setStatus(STATUS.success);
    };

return (
    <Searchbar onSubmit={onSubmit}/>
)
}

export default Movies 