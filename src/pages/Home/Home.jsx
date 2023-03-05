import { useEffect, useState } from "react";
import Loader from '../../components/Loader/Loader'
import React from 'react';
import Section from '../../components/Section/Section'
import TrendingList from '../../components/TrendingList/TrendingList'
import {STATUS} from '../../helpers/Status'
const { onMovieTrending} = require('Api');

// const {getTrending} = require('API');



const Home =() =>{
  
const[treadingList, setTreadingList] = useState([])
const[status, setStatus] = useState(STATUS.idle)



// useEffect(()=>{
//   setStatus(STATUS.pending)

//   API.getTrending()
//   .then(data => {
//     setTreadingList(data.results)
//     setStatus(STATUS.success)
//   })
//   .catch(error => setStatus(STATUS.error))
// },[])

useEffect(() => {
  onMovieTrending().then(res => {
    setTreadingList(res.results);
  });
}, []);

return (
  <>
 <Section tittle ={'Trending Today'}>
 {status === STATUS.pending && <Loader/>}
 {status===STATUS.success && <TrendingList treadingList={treadingList}/> 
}
</Section>
</>
)
}

export default Home;