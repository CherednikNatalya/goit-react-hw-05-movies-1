import React from 'react';
import { useState, useEffect} from "react";
import Searchbar from '../../components/Searchbar/Searchbar'
import {STATUS} from '../../helpers/Status'
import * as API from '../../API/API'

const Movies =() => {

  const [searchQuery, setSearchQuery] =useState('')
  const [imgData, setImgData] =useState([])
  const [searchFilm, setSearchFilm] =useState([])
//   const [page, setPage] =useState(1)
  const [status, setStatus] =useState(STATUS.idle)
//   const [totalFind, setTotalFind] = useState(0);
//   const [totalHits, setTotalHits] = useState(0);

    const onSubmit = value => {
        setSearchQuery(value);
        // setPage(1);
        // setImgData([]);
        // setTotalFind(0);
        console.log(searchQuery)
    }


    useEffect(()=>{
        setStatus(STATUS.pending)
        API.onMovieSearch()
        .then(data => {
            setSearchFilm(data.results)
          console.log(setSearchFilm)
          setStatus(STATUS.success)
        })
        .catch(error => setStatus(STATUS.error))
      },[searchQuery])

return (
    <Searchbar onSubmit={onSubmit}/>
)
}

export default Movies 