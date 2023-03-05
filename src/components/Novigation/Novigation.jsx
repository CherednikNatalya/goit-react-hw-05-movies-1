
// import { Suspense } from "react";
// import { Outlet } from "react-router-dom";
import { Header, Link} from '../Novigation/Novigation.styled.js';
import React from 'react';
// import { NavLink } from 'react-router-dom';

 const Navigation = () => {
  return (
     <Header>
        
        <div>
          <Link to="goit-react-hw-05-movies/" end>Home</Link>
          <Link to="goit-react-hw-05-movies/movies">Movies</Link>
          
        </div>
      </Header>
   
  );
};
export default  Navigation