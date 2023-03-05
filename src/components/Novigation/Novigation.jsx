
// import { Suspense } from "react";
// import { Outlet } from "react-router-dom";
import { Header, Link} from '../Novigation/Novigation.styled.js';
import React from 'react';
// import { NavLink } from 'react-router-dom';

 const Navigation = () => {
  return (
     <Header>
        
        <div>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
          
        </div>
      </Header>
   
  );
};
export default  Navigation