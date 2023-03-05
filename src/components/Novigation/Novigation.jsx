
// import { Suspense } from "react";
// import { Outlet } from "react-router-dom";
import { Container, Header,  Link } from '../Novigation/Novigation.styled';
import React from 'react';

 const Navigation = () => {
  return (
    <Container>
      <Header>
        
        <nav>
          <Link to="" end>Home</Link>
          <Link to="movies">Movies</Link>
          
        </nav>
      </Header>
      {/* <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense> */}
    </Container>
  );
};
export default  Navigation